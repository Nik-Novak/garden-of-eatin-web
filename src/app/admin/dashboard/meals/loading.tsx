import { Box, Stack, Skeleton, Typography } from "@mui/material";

export default function LoadingDashboard() {
  return (
    <Stack sx={{ alignItems: "center", mt: 10, gap: 4 }}>
      <Typography variant="h3">Devices</Typography>
      
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        spacing={4} 
        sx={{ width: "95%" }}
      >
        {/* Map Skeleton */}
        <Box sx={{ flex: 1, height: 500 }}>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Box>

        {/* Grid Skeleton */}
        <Box sx={{ flex: 1, height: 500 }}>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Box>
      </Stack>
    </Stack>
  );
}