"use client";

import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Stack 
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { submitForm } from '@/actions/contact';
import constants from "@/constants";
import { useNotificationQueue } from "@/components/NotificationQueue";
import Notification from "@/components/Notification";

export default function ContactPage() {
  const {pushNotification} = useNotificationQueue();
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Side: Friendly Copy */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h2" color="primary.main" gutterBottom>
              We’d love to hear from you.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
              Whether you're a meal provider looking for support or a community member with a suggestion, our garden gate is always open.
            </Typography>

            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: 'secondary.main', p: 1, borderRadius: '50%', display: 'flex' }}>
                  <EmailIcon sx={{ color: 'white' }} />
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{constants.contactEmail}</Typography>
              </Box>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: 'primary.main', p: 1, borderRadius: '50%', display: 'flex' }}>
                  <LocalPhoneIcon sx={{ color: 'white' }} />
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{constants.contactPhone}</Typography>
              </Box> */}
            </Stack>
          </Grid>

          {/* Right Side: The Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 6 }, 
                borderRadius: 8, 
                border: '1px solid', 
                borderColor: 'divider',
                boxShadow: '0px 20px 40px rgba(28, 74, 45, 0.05)'
              }}
            >
              <form action={async (formData)=>{
                await submitForm(formData);
                pushNotification(<Notification>Chat started. We'll be in touch in the next few minutes.</Notification>);
              }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      required
                      variant="outlined"
                      placeholder="Johnny Appleseed"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      variant="outlined"
                      placeholder="johnny@garden.com"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Phone Number (Optional)"
                      name="phone"
                      variant="outlined"
                      placeholder="+1 (555) 000-0000"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="How can we help you today?"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ 
                        py: 1.5, 
                        px: 4, 
                        borderRadius: 50,
                        fontSize: '1.1rem'
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}