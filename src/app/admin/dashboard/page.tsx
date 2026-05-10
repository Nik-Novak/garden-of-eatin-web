import { 
  Box, 
  Stack, 
  Typography, 
  Paper, 
  CardActionArea, 
  Grid, 
  alpha, 
  Link
} from "@mui/material";
import { 
  DevicesOtherOutlined, 
  RestaurantMenuOutlined, 
  ArrowForwardRounded 
} from "@mui/icons-material";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { canViewAdminDevices, canViewAdminMeals } from "@/actions/access";



export default async function AdminDashboard() {
  const [displayDevices, displayMeals] = await Promise.all([canViewAdminDevices(), canViewAdminMeals()]);

  /**
 * Dashboard configuration for easy scalability.
 * Simply add a new object here to create a new card.
 */
  const ADMIN_MODULES = [
    {
      enabled: displayDevices,
      title: "Devices",
      description: "View platform users, activity heatmaps, and hardware status.",
      icon: <DevicesOtherOutlined />,
      href: "/admin/dashboard/devices",
      accent: "#3b82f6", // Premium Blue
    },
    {
      enabled: displayMeals,
      title: "Meals",
      description: "Approve meal submissions, manage catalogs, and view interaction stats.",
      icon: <RestaurantMenuOutlined />,
      href: "/admin/dashboard/meals",
      accent: "#10b981", // Emerald Green
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, px: 4, py: 8, maxWidth: 1200, mx: 'auto' }}>
      {/* Header Section */}
      <Stack spacing={1} sx={{ mb: 8, alignItems: 'center', textAlign: 'center' }}>
        <Typography 
          variant="h3"
          sx={{ letterSpacing: '-0.02em', color: 'text.primary', fontWeight:800 }}
        >
          Management Portal
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600 }}>
          Direct access to core platform infrastructure and content moderation tools.
        </Typography>
      </Stack>

      {/* Scalable Grid */}
      <Grid container spacing={4} sx={{justifyContent:'center'}}>
        {ADMIN_MODULES.filter(m=>m.enabled).map((module) => (
          <Grid key={module.title} size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 20px 40px -12px ${alpha(module.accent, 0.15)}`,
                  borderColor: alpha(module.accent, 0.4),
                },
              }}
            >
              <CardActionArea 
                component={Link} 
                href={module.href} 
                sx={{ p: 4, height: '100%' }}
              >
                <Stack spacing={3}>
                  {/* Icon Wrapper */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: 56, 
                      height: 56, 
                      borderRadius: 3, 
                      bgcolor: alpha(module.accent, 0.1),
                      color: module.accent,
                    }}
                  >
                    {/* Cloning icon to apply custom sizing */}
                    {Boolean(module.icon) && 
                      require('react').cloneElement(module.icon as React.ReactElement, { 
                        sx: { fontSize: 32 } 
                      })
                    }
                  </Box>

                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight:700 }}>
                      {module.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {module.description}
                    </Typography>
                  </Stack>

                  <Stack 
                    direction="row" 
                    spacing={1} 
                    sx={{ color: module.accent, fontWeight: 600, fontSize: '0.875rem', alignItems:'center' }}
                  >
                    <span>Manage Module</span>
                    <ArrowForwardRounded sx={{ fontSize: 16 }} />
                  </Stack>
                </Stack>
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}