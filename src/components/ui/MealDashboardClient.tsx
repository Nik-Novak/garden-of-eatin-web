"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import CollectionGrid from "@/components/ui/CollectionGrid";
import Heatmap from "./HeatMap";
import { fetchDashboardMeals } from "@/actions/meal";

// Optional: define the type based on your Prisma schema
type MealType = Awaited<ReturnType<typeof fetchDashboardMeals>>[0];

export default function MealDashboardClient({ initialMeals }: { initialMeals: MealType[] }) {
  const [selection, setSelection] = useState<GridRowSelectionModel>({ids:new Set(), type:'include'});

  // React Query will instantly use initialDevices on mount, then manage background updates
  const { data: meals } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchDashboardMeals,
    initialData: initialMeals,
    staleTime: Infinity,
  });

  // Isolate and memoize the data transformation for performance
  const mapPoints = useMemo(() => {
    if (!meals) return [];

    // Default to all records if nothing is selected
    const activeMeals = selection?.ids.size > 0 
      ? meals.filter((m) => selection.ids.has(m.id))
      : meals;

    // Flatten all selected meals' searches into an array of { lat, lng }
    return activeMeals.map((meal) =>{
      let [lng, lat] = meal.location.coordinates;
      return {lng, lat};
    });
  }, [meals, selection]);

  return (
    <Stack sx={{ alignItems: "center", mt: 10, gap: 4, mb: 10 }}>
      <Typography variant="h3" sx={{fontWeight:600}}>
        Meals
      </Typography>

      <Stack 
        direction={{ xs: "column", xl: "row" }} 
        spacing={4} 
        sx={{ width: "95%" }}
      >
        {/* Heatmap Section */}
        <Paper 
          elevation={0}
          sx={{ 
            flex: 1, 
            height: 600, 
            borderRadius: 2, 
            border: '1px solid',
            borderColor: 'divider',
            overflow: 'hidden'
          }}
        >
          <Heatmap points={mapPoints} />
        </Paper>

        {/* DataGrid Section */}
        <Box sx={{ flex: 1, height: 600 }}>
          <CollectionGrid
            rows={meals || []}
            include={{name:true, created_at:true, _count:{ meal_search_hits:true, meal_interactions:true, scannable_document_meal_hits:true }}}
            checkboxSelection={true}
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelection(newSelectionModel);
            }}
            // Ensure the grid takes full height of the container
            sx={{
              height: '100%',
              backgroundColor: 'background.paper',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              '& .MuiDataGrid-main': { borderRadius: 4 }
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}