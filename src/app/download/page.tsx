import Image from "next/image";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack,
  Card,
  CardContent
} from "@mui/material";

// Icons
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Footer } from "@/components/Footer";

export default function DownloadPage() {
  return (
    <Box sx={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* DOWNLOAD HERO SECTION */}
      <Box 
        sx={{ 
          bgcolor: "background.default", 
          flexGrow: 1,
          pt: { xs: 8, md: 12 }, 
          pb: { xs: 8, md: 12 } 
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            
            <Grid size={{xs:12, md:6}}>
              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 2, color: 'primary.main' }}>
                Get the App
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Join the Garden of Eatin' community today. Find warm meals, discover local resources, and connect with your neighbors—right from your pocket.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                {/* Active iOS Button */}
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large" 
                  href="https://apps.apple.com/us/app/garden-of-eatin/id6759996982"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<AppleIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem', 
                    borderRadius: 50,
                    boxShadow: 3
                  }}
                >
                  Download for iOS
                </Button>

                {/* Disabled Android Button */}
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large" 
                  disabled
                  startIcon={<AndroidIcon />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem', 
                    borderRadius: 50,
                    borderWidth: 2,
                    '&.Mui-disabled': { 
                      borderColor: 'text.secondary', 
                      color: 'text.secondary',
                      opacity: 0.7
                    }
                  }}
                >
                  Android Coming Soon
                </Button>
              </Stack>
            </Grid>

            {/* App Mockup Placeholder */}
            <Grid size={{xs:12, md:6}} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  // 1. Maintain the 1284/2778 aspect ratio
                  aspectRatio: '1284 / 2778', 
                  // 2. Control the height; the width will auto-calculate
                  height: { xs: '500px', md: '650px' }, 
                  width: 'auto',
                  // 3. Rounding and Clipping
                  borderRadius: '40px', 
                  overflow: 'hidden',
                  // 4. Aesthetics: Add a subtle border or shadow to simulate a device
                  border: '8px solid #1a1a1a', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  bgcolor: 'black' 
                }}
              >
                <Image 
                  src="/img/Garden_of_Eatin_Preview_2_Resized.png" 
                  alt="Garden of Eatin App Interface"
                  fill
                  style={{ 
                    objectFit: 'cover', // Ensures the image fills the rounded container
                  }}
                  priority
                />
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* QUICK BENEFITS SECTION (Optional but recommended to fill out the page) */}
      <Box sx={{ bgcolor: "primary.main", color: "#fcf9f2", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: "Location Based", desc: "Instantly route to the closest available meals.", icon: <LocationOnIcon fontSize="large" sx={{ color: "secondary.main" }} /> },
              { title: "Live Alerts", desc: "Get notified about menu changes or schedule updates.", icon: <NotificationsActiveIcon fontSize="large" sx={{ color: "secondary.main" }} /> },
              { title: "Community First", desc: "Built to provide dignity and ease for everyone.", icon: <FavoriteIcon fontSize="large" sx={{ color: "secondary.main" }} /> }
            ].map((feature, index) => (
              <Grid size={{xs:12, md:4}} key={index}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}