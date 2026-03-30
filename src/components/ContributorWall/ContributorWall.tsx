// components/ContributorWall.tsx
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import { database } from "@/prisma/database";

export default async function ContributorWall() {
  // await new Promise(resolve=>setTimeout(resolve, 10_000));
  const contributors = await database.contributor.findMany();

  if (!contributors || contributors.length === 0) return null;

  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 2, color: "primary.main" }}>
          Powered by Community
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "text.secondary" }}>
          This project wouldn't be possible without the help of these individuals.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mx: "auto",
            
            // 1. Math Variables for the Hexagon Geometry
            "--hex-width": { xs: "100px", sm: "130px", md: "150px" },
            // Height of a pointy-topped hexagon is Width * 1.1547
            "--hex-height": "calc(var(--hex-width) * 1.1547)", 
            // Rows must overlap by 25% of the height to interlock
            "--hex-overlap": "calc(var(--hex-height) * -0.25)",
            // Even rows must be shifted right by half a width
            "--hex-shift": "calc(var(--hex-width) * 0.5)",

            // 2. Strict container widths to force wrapping at the exact right time
            width: {
              xs: "calc(var(--hex-width) * 3)", // Mobile: 3 columns
              sm: "calc(var(--hex-width) * 4)", // Tablet: 4 columns
              md: "calc(var(--hex-width) * 5)", // Desktop: 5 columns
              lg: "calc(var(--hex-width) * 6)", // Large: 6 columns
            },

            // 3. Base styles for each cell wrapper
            "& .hex-item": {
              width: "var(--hex-width)",
              height: "var(--hex-height)",
              marginTop: "var(--hex-overlap)",
            },

            // 4. Responsive Staggering Logic (nth-of-type resets margins based on columns)
            // XS: 3 Cols (Cycle: 3 + 2 = 5)
            "@media (max-width: 599.95px)": {
              "& .hex-item:nth-of-type(-n + 3)": { marginTop: 0 },
              "& .hex-item:nth-of-type(5n + 4)": { marginLeft: "var(--hex-shift)" },
            },
            // SM: 4 Cols (Cycle: 4 + 3 = 7)
            "@media (min-width: 600px) and (max-width: 899.95px)": {
              "& .hex-item:nth-of-type(-n + 4)": { marginTop: 0 },
              "& .hex-item:nth-of-type(7n + 5)": { marginLeft: "var(--hex-shift)" },
            },
            // MD: 5 Cols (Cycle: 5 + 4 = 9)
            "@media (min-width: 900px) and (max-width: 1199.95px)": {
              "& .hex-item:nth-of-type(-n + 5)": { marginTop: 0 },
              "& .hex-item:nth-of-type(9n + 6)": { marginLeft: "var(--hex-shift)" },
            },
            // LG: 6 Cols (Cycle: 6 + 5 = 11)
            "@media (min-width: 1200px)": {
              "& .hex-item:nth-of-type(-n + 6)": { marginTop: 0 },
              "& .hex-item:nth-of-type(11n + 7)": { marginLeft: "var(--hex-shift)" },
            },
          }}
        >
          {contributors.map((person) => (
            <Box className="hex-item" key={person.id}>
              <Box
                sx={{
                  position: "relative",
                  width: "calc(100% - 6px)", // Subtracts 6px to create a 3px gap all around
                  height: "calc(100% - 6px)",
                  margin: "3px",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  overflow: "hidden",
                  cursor: "pointer",
                  bgcolor: "grey.200", // Fallback color behind images
                  "&:hover .hover-img": { opacity: 1 },
                  "&:hover .default-img": { opacity: 0 },
                }}
              >
                <Box className="default-img" sx={{ position: "absolute", inset: 0, transition: "0.4s ease", opacity: 1, transform: "scale(0.7)" }}>
                  <Image src={person.defaultImage} alt={person.firstName} fill style={{ objectFit: "cover" }} />
                </Box>
                <Box className="hover-img" sx={{ position: "absolute", inset: 0, transition: "0.4s ease", opacity: 0, transform: "scale(0.7)" }}>
                  <Image src={person.hoverImage} alt={person.firstName} fill style={{ objectFit: "cover" }} />
                </Box>

                {/* Text Overlay inside the hexagon */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    pt: 5,
                    pb: 2.5,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none", // Ensures hover effect strictly triggers on the image
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#fff", textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}>
                    {person.firstName}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}