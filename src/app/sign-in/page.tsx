"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  CircularProgress,
  Stack,
  Fade,
  Link,
  Avatar,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { authClient } from "@/lib/auth/client";

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const ENABLED_PROVIDERS = {
  magicLink: true,
  google: true,
  apple: true,
};

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [magicLinkLoading, setMagicLinkLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "apple" | null>(null);
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Better-Auth Session Hook
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setMagicLinkLoading(true);
    try {
      const { error } = await authClient.signIn.magicLink({
        email,
        callbackURL: window.location.href,
      });

      if (error) {
        console.error("Magic Link Error:", error.message);
      } else {
        setMagicLinkSent(true);
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    } finally {
      setMagicLinkLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: "google" | "apple") => {
    setSocialLoading(provider);
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: window.location.href,
      });
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await authClient.signOut();
    } catch (err) {
      console.error("Sign out failed:", err);
    } finally {
      setIsSigningOut(false);
    }
  };

  const hasSocialProviders = ENABLED_PROVIDERS.google || ENABLED_PROVIDERS.apple;

  // ----------------------------------------------------------------------
  // RENDER: LOADING STATE
  // ----------------------------------------------------------------------
  if (isPending) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress size={32} thickness={5} sx={{ color: "text.primary" }} />
      </Box>
    );
  }

  // ----------------------------------------------------------------------
  // RENDER: LOGGED-IN STATE
  // ----------------------------------------------------------------------
  if (user) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 2,
        }}
      >
        <Container maxWidth="xs" disableGutters>
          <Fade in timeout={600}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 4,
                boxShadow: "0px 24px 48px rgba(0, 0, 0, 0.04)",
                border: "1px solid",
                borderColor: "divider",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <Box sx={{ height: 4, bgcolor: "text.primary" }} />
              <Box sx={{ p: 5 }}>
                <Avatar
                  src={user.image || ""}
                  sx={{
                    width: 64,
                    height: 64,
                    margin: "0 auto",
                    mb: 2,
                    bgcolor: "grey.100",
                    color: "text.primary",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <PersonIcon />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {user.name || "User"}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                  {user.email}
                </Typography>

                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                  startIcon={isSigningOut ? <CircularProgress size={18} /> : <LogoutIcon />}
                  sx={{
                    py: 1.25,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {isSigningOut ? "Signing out..." : "Sign Out"}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    );
  }

  // ----------------------------------------------------------------------
  // RENDER: SIGN-IN STATE (Original UI)
  // ----------------------------------------------------------------------
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        backgroundImage: "radial-gradient(ellipse at top, rgba(150, 150, 150, 0.05), transparent 80%)",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="xs" disableGutters>
        <Fade in timeout={800}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: "0px 24px 48px rgba(0, 0, 0, 0.04)",
              border: "1px solid",
              borderColor: "divider",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: 4,
                width: "100%",
                background: "linear-gradient(90deg, #000000 0%, #434343 100%)",
              }}
            />

            <Box sx={{ p: { xs: 4, md: 5 } }}>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: "text.primary",
                    color: "background.paper",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.5px" }}>
                    Logo
                  </Typography>
                </Box>
                <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}>
                  Welcome back
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Enter your details to securely sign in to your account.
                </Typography>
              </Box>

              <Stack spacing={3}>
                {ENABLED_PROVIDERS.magicLink && (
                  <Box component="form" onSubmit={handleMagicLinkSubmit} noValidate>
                    {magicLinkSent ? (
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          bgcolor: "success.main",
                          color: "success.contrastText",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          gap: 1.5,
                        }}
                      >
                        <CheckCircleOutlineIcon fontSize="large" />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          We sent a magic link to<br />
                          <strong>{email}</strong>
                        </Typography>
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => setMagicLinkSent(false)}
                          sx={{ color: "inherit", opacity: 0.8, "&:hover": { opacity: 1 }, mt: 1 }}
                        >
                          Use a different email
                        </Button>
                      </Box>
                    ) : (
                      <Stack spacing={2}>
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          variant="outlined"
                          slotProps={{
                            input: {
                              startAdornment: (
                                <MailOutlineIcon sx={{ color: "text.disabled", mr: 1.5, fontSize: 20 }} />
                              ),
                              sx: {
                                borderRadius: 2,
                                "& fieldset": { borderColor: "divider" },
                              },
                            },
                          }}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          disabled={magicLinkLoading || !email}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: "none",
                            bgcolor: "text.primary",
                            color: "background.paper",
                            "&:hover": {
                              bgcolor: "text.secondary",
                              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            },
                          }}
                        >
                          {magicLinkLoading ? (
                            <CircularProgress size={24} sx={{ color: "background.paper" }} />
                          ) : (
                            "Continue with Email"
                          )}
                        </Button>
                      </Stack>
                    )}
                  </Box>
                )}

                {ENABLED_PROVIDERS.magicLink && hasSocialProviders && (
                  <Divider
                    sx={{
                      "&::before, &::after": { borderColor: "divider" },
                      color: "text.disabled",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Or
                  </Divider>
                )}

                {hasSocialProviders && (
                  <Stack spacing={2}>
                    {ENABLED_PROVIDERS.google && (
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => handleSocialSignIn("google")}
                        disabled={!!socialLoading}
                        startIcon={
                          socialLoading === "google" ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <GoogleIcon />
                          )
                        }
                        sx={{
                          py: 1.25,
                          borderRadius: 2,
                          color: "text.primary",
                          borderColor: "divider",
                          fontWeight: 500,
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: "action.hover",
                            borderColor: "text.primary",
                          },
                        }}
                      >
                        {socialLoading === "google" ? "Connecting..." : "Continue with Google"}
                      </Button>
                    )}

                    {ENABLED_PROVIDERS.apple && (
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => handleSocialSignIn("apple")}
                        disabled={!!socialLoading}
                        startIcon={
                          socialLoading === "apple" ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <AppleIcon />
                          )
                        }
                        sx={{
                          py: 1.25,
                          borderRadius: 2,
                          color: "text.primary",
                          borderColor: "divider",
                          fontWeight: 500,
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: "action.hover",
                            borderColor: "text.primary",
                          },
                        }}
                      >
                        {socialLoading === "apple" ? "Connecting..." : "Continue with Apple"}
                      </Button>
                    )}
                  </Stack>
                )}
              </Stack>
            </Box>

            <Box
              sx={{
                px: 4,
                py: 3,
                bgcolor: "background.default",
                borderTop: "1px solid",
                borderColor: "divider",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                By continuing, you agree to our{" "}
                <Box component={Link} href="/agreements/terms_of_service" target="_blank" sx={{ color: "text.primary", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  Terms of Service
                </Box>{" "}
                and{" "}
                <Box component={Link} href="/agreements/privacy_policy" target="_blank" sx={{ color: "text.primary", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                  Privacy Policy
                </Box>.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}