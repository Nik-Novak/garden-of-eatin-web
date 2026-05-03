// components/ContributorWallSkeleton.tsx
import { Box, Container, Typography, Skeleton } from "@mui/material";

export function ContributorWallSkeleton() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          <Skeleton width="40%" sx={{ mx: "auto" }} />
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          <Skeleton width="60%" sx={{ mx: "auto" }} />
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mx: "auto",
            
            "--hex-width": { xs: "100px", sm: "130px", md: "150px" },
            "--hex-height": "calc(var(--hex-width) * 1.1547)",
            "--hex-overlap": "calc(var(--hex-height) * -0.25)",
            "--hex-shift": "calc(var(--hex-width) * 0.5)",

            width: {
              xs: "calc(var(--hex-width) * 3)",
              sm: "calc(var(--hex-width) * 4)",
              md: "calc(var(--hex-width) * 5)",
              lg: "calc(var(--hex-width) * 6)",
            },

            "& .hex-item": {
              width: "var(--hex-width)",
              height: "var(--hex-height)",
              marginTop: "var(--hex-overlap)",
            },

            "@media (max-width: 599.95px)": {
              "& .hex-item:nth-of-type(-n + 3)": { marginTop: 0 },
              "& .hex-item:nth-of-type(5n + 4)": { marginLeft: "var(--hex-shift)" },
            },
            "@media (min-width: 600px) and (max-width: 899.95px)": {
              "& .hex-item:nth-of-type(-n + 4)": { marginTop: 0 },
              "& .hex-item:nth-of-type(7n + 5)": { marginLeft: "var(--hex-shift)" },
            },
            "@media (min-width: 900px) and (max-width: 1199.95px)": {
              "& .hex-item:nth-of-type(-n + 5)": { marginTop: 0 },
              "& .hex-item:nth-of-type(9n + 6)": { marginLeft: "var(--hex-shift)" },
            },
            "@media (min-width: 1200px)": {
              "& .hex-item:nth-of-type(-n + 6)": { marginTop: 0 },
              "& .hex-item:nth-of-type(11n + 7)": { marginLeft: "var(--hex-shift)" },
            },
          }}
        >
          {/* Render an arbitrary number of skeletons to fill out a grid structure */}
          {[...Array(14)].map((_, i) => (
            <Box className="hex-item" key={i}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  width: "calc(100% - 6px)",
                  height: "calc(100% - 6px)",
                  margin: "3px",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}