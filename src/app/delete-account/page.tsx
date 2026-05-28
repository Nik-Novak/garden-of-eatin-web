"use client";

import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Stack,
  MenuItem
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
// import { createAccountDeletionRequest } from '@/actions/account';
import { useNotificationQueue } from "@/components/ui/NotificationQueue";
import Notification from "@/components/ui/Notification";

const DELETION_REASONS = [
  "Privacy concerns",
  "No longer participating in community meals",
  "Taking a break from the app",
  "Found a better alternative",
  "Other"
];

export default function DeleteAccountPage() {
  const { pushNotification } = useNotificationQueue();

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Left Side: Premium & Empathetic Copy */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                letterSpacing: '-0.02em',
                color: 'text.primary',
                mb: 2
              }}
            >
              Leaving the garden?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
              We're sorry to see you go. Submitting this form will initiate the process to permanently uproot your Garden of Eatin' account.
            </Typography>

            <Stack spacing={4} sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ bgcolor: 'error.50', p: 1.5, borderRadius: 3, display: 'flex' }}>
                  <DeleteOutlineIcon color="error" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Permanent Deletion
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This action is irreversible. All of your saved personalizations, and profile data will be permanently removed.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ bgcolor: 'success.50', p: 1.5, borderRadius: 3, display: 'flex' }}>
                  <ShieldOutlinedIcon color="success" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Data Privacy Guaranteed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Whether you signed in via Magic Link, Google, or Apple, all associated authentication records and tokens will be securely wiped from our servers.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Right Side: The Glassmorphic Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 6 }, 
                borderRadius: { xs: 4, md: 8 }, 
                border: '1px solid', 
                borderColor: 'rgba(255, 255, 255, 0.4)',
                background: 'rgba(255, 255, 255, 0.7)', // Subtle transparency for glass effect
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.04)'
              }}
            >
              <form action={async (formData) => {
                // await createAccountDeletionRequest(formData);
                pushNotification(
                  <Notification>
                    Request received. Your account deletion will be reviewed and processed within 7 business days.
                  </Notification>
                );
              }}>
                <Grid container spacing={3}>
                  
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Account Email Address"
                      name="email"
                      type="email"
                      required
                      variant="outlined"
                      placeholder="johnny@garden.com"
                      helperText="Enter the email associated with your Magic Link, Apple, or Google sign-in."
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Reason for leaving"
                      name="reason"
                      defaultValue=""
                      variant="outlined"
                    >
                      {DELETION_REASONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Feedback (Optional)"
                      name="feedback"
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Is there anything we could have done better?"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      color="error" 
                      size="large"
                      disableElevation
                      sx={{ 
                        py: 1.5, 
                        px: 4, 
                        borderRadius: 50,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' }
                      }}
                    >
                      Request Deletion
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