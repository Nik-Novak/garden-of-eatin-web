import { Box, Container, Grid, Typography, Skeleton, Stack } from "@mui/material";

export function UsageStatsSkeleton() {
  return (
    <Box sx={{ position: "relative", bgcolor: "primary.dark", py: 8, overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6 }}>
          <Skeleton variant="text" width="60%" sx={{ mx: "auto", bgcolor: "rgba(255,255,255,0.1)" }} />
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item}>
              <Stack alignItems="center" spacing={2}>
                <Skeleton variant="circular" width={60} height={60} sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
                <Skeleton variant="text" width="40%" height={60} sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
                <Skeleton variant="text" width="70%" height={30} sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}