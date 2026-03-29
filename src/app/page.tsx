
import Image from "next/image";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Stack
} from "@mui/material";

// Icons for Guests
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StarIcon from '@mui/icons-material/Star';

// Icons for Hosts
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Footer } from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      
      {/* HERO SECTION */}
      <Box 
        sx={{ 
          bgcolor: "background.default", 
          pt: { xs: 8, md: 12 }, 
          pb: { xs: 8, md: 12 } 
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Grid v2: removed "item", added sizes directly */}
            <Grid size={{xs:12, md:6}}>
              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 2, color: 'primary.main' }}>
                Garden of Eatin'
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Connecting communities through the power of a shared meal. Find local, free food with dignity and ease.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" href="/download" color="secondary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 50 }}>
                  Download App
                </Button>
                <ContactButton variant="outlined" color="primary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 50 }}>
                  Learn More
                </ContactButton>
              </Stack>
            </Grid>
            <Grid size={{xs:12, md:6}}>
              {/* Image Placeholder */}
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: { xs: 300, md: 450 }, 
                  width: '100%', 
                  borderRadius: 4, 
                  overflow: 'hidden',
                  boxShadow: 3
                }}
              >
                <Image 
                  src="/img/banner.png"
                  alt="Garden of Eatin Banner"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MISSION SECTION */}
      <Box sx={{ bgcolor: "primary.main", color: "#fcf9f2", py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" sx={{ mb: 3 }}>
            Food is a Basic Right.
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontWeight: 400, lineHeight: 1.8 }}>
            In our abundant society, anyone and everyone should be welcome and eligible for a warm meal. We're here to alleviate the mental stress of figuring out where your next plate is coming from, so you can focus on healing, health, and building your dream life.
          </Typography>
        </Container>
      </Box>

      {/* FOR GUESTS SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" align="center" sx={{ mb: 2, color: "primary.main" }}>
          For Community Members
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "text.secondary" }}>
          Everything you need to find a welcoming place to eat, stress-free.
        </Typography>
        
        <Grid container spacing={4}>
          {[
            { title: "Find a Meal in a Tap", desc: "Just press a button and get instantly directed to the nearest, highest-rated community meal.", icon: <RestaurantIcon fontSize="large" color="secondary" /> },
            { title: "Explore & Filter", desc: "Need to work or charge up? Filter meals by specific amenities like WiFi, power outlets, and more.", icon: <WifiIcon fontSize="large" color="secondary" /> },
            { title: "Live Schedules", desc: "No more wasted trips. Rely on live schedules so you never arrive at a canceled event.", icon: <EventAvailableIcon fontSize="large" color="secondary" /> },
            { title: "Become a Guru", desc: "Know a hidden gem? Add unlisted food resources and become a credited community guide!", icon: <StarIcon fontSize="large" color="secondary" /> }
          ].map((feature, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Card sx={{ height: '100%', borderTop: '4px solid', borderColor: 'secondary.main', boxShadow: 2 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOR HOSTS SECTION */}
      <Box sx={{ bgcolor: "secondary.main", py: { xs: 8, md: 12 } }}> 
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2, color: "background.default" }}>
            For Meal Providers
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "background.default", opacity: 0.9 }}>
            You do so much for the community; let the community help you back.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              { title: "Feel the Support", desc: "Tap into donation and volunteer networks directly through the app to support your mission.", icon: <VolunteerActivismIcon fontSize="large" color="primary" /> },
              { title: "Understand Your Impact", desc: "Gain valuable insights into views, navigation, attendance, and how people discover your meals.", icon: <QueryStatsIcon fontSize="large" color="primary" /> },
              { title: "Real-Time Broadcasts", desc: "Easily broadcast last-minute schedule changes or moves so your guests are always informed.", icon: <CampaignIcon fontSize="large" color="primary" /> }
            ].map((feature, index) => (
              <Grid size={{xs:12, sm:6, md:4}} key={index}>
                <Card sx={{ height: '100%', bgcolor: 'background.default', boxShadow: 3 }}>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA FOOTER */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'primary.main', color: 'background.default' }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ mb: 3 }}>
            Join the Family
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem' }}>
            Let's make sure no one misses out on a great meal, vital resources, and wonderful company.
          </Typography>
          <Button variant="contained" href="/download" color="secondary" size="large" sx={{ px: 5, py: 2, fontSize: '1.2rem', borderRadius: 50 }}>
            Download Now
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}