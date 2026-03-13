"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, IconButton, Fade } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function FloatingNav() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Detect if we are on the home page
  const isHome = pathname === "/";

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Set initial scroll position on mount
    handleScroll();

    // Passive listener for better scrolling performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation triggers
  // Show the back button if we aren't home AND haven't scrolled down far
  const showBackButton = !isHome;
  // Show the scroll-to-top button once we've scrolled down a bit
  const showScrollToTop = scrollY > 200;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        zIndex: 1200, // High enough to sit over page content
        pointerEvents: "none", // Allows clicks to pass through the empty container space
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Top Left: Subtle Back / Home Button */}
      <Fade in={showBackButton} timeout={600}>
        <Box sx={{ pointerEvents: "auto", position: "absolute", left: { xs: 16, md: 32 } }}>
          <Button
            href="/"
            // onClick={() => router.push("/")} // Or router.back() depending on your preference
            startIcon={<ArrowBackIosNewIcon sx={{ fontSize: "14px !important" }} />}
            disableRipple
            sx={{
              color: "text.secondary",
              textTransform: "none",
              fontFamily: "var(--font-roboto)", 
              fontWeight: 400,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "text.primary",
                background: "transparent",
                transform: "translateX(-4px)", // Sleek slide interaction on hover
              },
            }}
          >
            Home
          </Button>
        </Box>
      </Fade>

      {/* Top Middle: Scroll to Top Up Arrow */}
      <Fade in={showScrollToTop} timeout={600}>
        <Box sx={{ pointerEvents: "auto", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <IconButton
            onClick={handleScrollToTop}
            size="small"
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "1px solid",
              borderColor: "divider",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "background.paper",
                transform: "translateY(-4px)", // Sleek lift interaction on hover
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
              },
            }}
          >
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>
        </Box>
      </Fade>
    </Box>
  );
}