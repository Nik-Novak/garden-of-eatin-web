"use client";
import Link from "next/link";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.default', py: 6, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          
          {/* Brand/Logo Area */}
          <Grid size={{xs:12, md:4}}>
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold', mb: 1 }}>
              Garden of Eatin'
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bridging the gap between food abundance and community need. 
              Designed with love for a better neighborhood.
            </Typography>
          </Grid>

          {/* Legal Links */}
          <Grid size={{xs:12, md:5}}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 1, sm: 3 }} 
              justifyContent={{ md: 'center' }}
            >
              <Link href="/agreements/release_of_liability" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  Release of Liability
                </Typography>
              </Link>
              <Link href="/agreements/terms_of_service" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  Terms of Service
                </Typography>
              </Link>
              <Link href="/agreements/privacy_policy" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  Privacy Policy
                </Typography>
              </Link>
            </Stack>
          </Grid>

          {/* Contact Button */}
          <Grid size={{xs:12, md:3}} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={<MailOutlineIcon />}
              sx={{ borderRadius: 8 }}
              href="/contact"
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Garden of Eatin'. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}