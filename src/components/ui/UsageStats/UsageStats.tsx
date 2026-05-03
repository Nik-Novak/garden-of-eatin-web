import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { database } from "@/prisma/database";

export default async function UsageStats() {
  // Pull only the most recent record
  const latestStats = await database.platformUsageStats.findFirst({
    orderBy: {
      created_at: 'desc'
    }
  });

  // Fallback zeros if the DB is completely empty
  const devices = latestStats?.total_devices || 0;
  const searches = latestStats?.total_meal_searches || 0;
  const impressions = latestStats?.total_meal_impressions || 0;

  return (
    <Box 
      sx={{ 
        position: "relative", 
        bgcolor: "primary.dark", 
        color: "background.default", 
        py: { xs: 8, md: 10 }, 
        overflow: "hidden" 
      }}
    >
      {/* Massive Background Watermark Icon to break up the design pattern */}
      <PublicIcon 
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "400px", md: "800px" },
          color: "common.white",
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
          Our Growing Impact
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, opacity: 0.8 }}>
          Real-time metrics from the Garden of Eatin' community
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          
          {/* Stat 1: Devices */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems="center" textAlign="center" spacing={1}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }}>
                <DevicesIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800 }}>
                {devices.toLocaleString()}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Users Reached
              </Typography>
            </Stack>
          </Grid>

          {/* Stat 2: Searches */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems="center" textAlign="center" spacing={1}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }}>
                <SearchIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800 }}>
                {searches.toLocaleString()}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Meal Searches Made
              </Typography>
            </Stack>
          </Grid>

          {/* Stat 3: Impressions */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems="center" textAlign="center" spacing={1}>
              <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', mb: 1 }}>
                <DinnerDiningIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800 }}>
                {impressions.toLocaleString()}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Meals Shown
              </Typography>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}