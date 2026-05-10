"use client";

import { useState, useEffect, use, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Box, 
  IconButton, 
  Fade, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText, 
  Avatar, 
  CircularProgress,
  Divider,
  Typography
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { authClient } from "@/lib/auth/client";
import { ac, hasPermissions, Role } from "@/lib/auth/access";

export default function FloatingUserMenu() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  // Non-blocking session access
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  const hasAdminDashboard = useMemo(() => {
    if (!user?.role) return false;
    const role = user.role;
    // Perform an OR check locally
    return hasPermissions(role, 'admin_dashboard', ['view']);
  }, [user?.role]);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show only when at the top of the page (matching your scrollToTop inverse logic)
  const showMenuCircle = scrollY <= 200;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    handleClose();
    router.push(path);
  };

  const handleSignOut = async () => {
    handleClose();
    await authClient.signOut();
    router.push("/");
  };

  return (
    <>
      <Fade in={showMenuCircle} timeout={600}>
        <Box
          sx={{
            position: "fixed",
            top: { xs: 16, md: 32 },
            right: { xs: 16, md: 32 },
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={handleClick}
            disableRipple
            sx={{
              p: 0.5,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              backdropFilter: "blur(12px)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                bgcolor: "background.paper",
                transform: "scale(1.05)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              },
            }}
          >
            {isPending ? (
              <Box sx={{ p: 1, display: "flex", alignItems: "center", justifyItems: "center" }}>
                <CircularProgress size={24} thickness={4} color="inherit" />
              </Box>
            ) : (
              <Avatar
                src={user?.image || undefined}
                alt={user?.name || "User Menu"}
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: user ? "primary.main" : "transparent",
                  color: user ? "primary.contrastText" : "text.secondary",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "inherit",
                }}
              >
                {/* Fallback to first letter of name, or a default icon if not logged in */}
                {user ? user.name?.charAt(0).toUpperCase() : <PersonAddIcon fontSize="small" />}
              </Avatar>
            )}
          </IconButton>
        </Box>
      </Fade>

      {/* Elegant Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{paper:{
          elevation: 0,
          sx: {
            mt: 1.5,
            minWidth: 200,
            overflow: "visible",
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            backdropFilter: "blur(20px)", // Glassmorphism dropdown
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
            "& .MuiMenuItem-root": {
              px: 2,
              py: 1.2,
              borderRadius: 1.5,
              mx: 1,
              my: 0.5,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "action.hover",
              },
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              borderLeft: "1px solid",
              borderTop: "1px solid",
              borderColor: "divider",
              zIndex: 0,
            },
          },
        }}}
      >
        {user && (
          <Box sx={{ px: 2, py: 1.5, pb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.primary" }}>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
              {user.email}
            </Typography>
          </Box>
        )}

        {user && <Divider sx={{ mx: 2, mb: 1 }} />}

        {/* --- Authenticated State --- */}
        {user ? (
          [
            hasAdminDashboard && (
              <MenuItem key="admin" onClick={() => handleNavigate("/admin/dashboard")}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText primary="Admin Dashboard" slotProps={{primary:{sx:{fontSize: '0.9rem', fontWeight: 500}}}} />
              </MenuItem>
            ),
            // <MenuItem key="dashboard" onClick={() => handleNavigate("/dashboard")}>
            //   <ListItemIcon>
            //     <DashboardIcon fontSize="small" sx={{ color: "text.secondary" }} />
            //   </ListItemIcon>
            //   <ListItemText primary="Dashboard" slotProps={{primary:{sx:{fontSize: '0.9rem'}}}} />
            // </MenuItem>,
            <Divider key="divider" sx={{ my: 1, mx: 2 }} />,
            <MenuItem key="signout" onClick={handleSignOut}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText primary="Sign Out" slotProps={{primary:{sx:{fontSize: '0.9rem', color: 'error.main'}}}} />
            </MenuItem>,
          ]
        ) : (
          /* --- Unauthenticated State --- */
          [
            <MenuItem key="signin" onClick={() => handleNavigate("/sign-in")}>
              <ListItemIcon>
                <LoginIcon fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText primary="Sign In" slotProps={{primary:{sx:{fontSize: '0.9rem', fontWeight: 500}}}} />
            </MenuItem>,
            <MenuItem key="signup" onClick={() => handleNavigate("/sign-in")}>
              <ListItemIcon>
                <PersonAddIcon fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText primary="Sign Up" slotProps={{primary:{sx:{fontSize: '0.9rem'}}}} />
            </MenuItem>,
          ]
        )}
      </Menu>
    </>
  );
}