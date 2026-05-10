"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import CollectionGrid from "@/components/ui/CollectionGrid";
import { fetchDashboardDevices } from "@/actions/device";
import Heatmap from "./HeatMap";

// Optional: define the type based on your Prisma schema
type DeviceType = Awaited<ReturnType<typeof fetchDashboardDevices>>[0];

export default function DeviceDashboardClient({ initialDevices }: { initialDevices: DeviceType[] }) {
  const [selection, setSelection] = useState<GridRowSelectionModel>({ids:new Set(), type:'include'});

  // React Query will instantly use initialDevices on mount, then manage background updates
  const { data: devices } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDashboardDevices,
    initialData: initialDevices,
    staleTime: Infinity,
  });

  // Isolate and memoize the data transformation for performance
  const mapPoints = useMemo(() => {
    if (!devices) return [];

    // Default to all records if nothing is selected
    const activeDevices = selection?.ids.size > 0 
      ? devices.filter((d) => selection.ids.has(d.id))
      : devices;

    // Flatten all selected devices' searches into an array of { lat, lng }
    return activeDevices.flatMap((device) =>
      device.meal_occurrence_searches.map((search) => {
        // MongoDB GeoJSON stores coordinates as [longitude, latitude]
        const [lng, lat] = search.user_location.coordinates;
        return { lat, lng };
      })
    );
  }, [devices, selection]);

  return (
    <Stack sx={{ alignItems: "center", mt: 10, gap: 4, mb: 10 }}>
      <Typography variant="h3" sx={{fontWeight:600}}>
        Devices
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
            rows={devices || []}
            include={{
              id: true,
              settings: { travel_mode: true },
              created_at: true,
              _count: {
                meal_occurrence_searches: true,
                meal_interactions: true,
                submitted_meals: true,
                device_agreements: true,
              },
              metadata: { os_name: true, model_name: true },
            }}
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
              // '& .MuiDataGrid-main': { borderRadius: 4 }
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}