"use client";

import { registerQRScan } from "@/actions/qr";
import { getWebDeviceUUID } from "@/utils/fns/uuid";
import { QRActionUrlRedirectPayload } from "@prisma/client";
import { use, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function QRScanPage({ 
  params
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id: qr_code_id } = use(params);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const processScan = async () => {
      try {
        // Grab the browser UUID safely on the client
        const web_device_uuid = getWebDeviceUUID();
        
        // Execute the server action
        const action = await registerQRScan({ qr_code_id, web_device_uuid });

        if (!isMounted) return;

        switch (action.type) {
          case 'URL_REDIRECT': {
            const { url } = action.payload as QRActionUrlRedirectPayload;
            // Use window.location.replace so the user can't hit "back" to the loading screen.
            // This safely handles both internal routes and external links.
            window.location.replace('https://example.com');
            break;
          }
          default: {
            setError(`QRCode with action type: ${action.type} is unsupported at this time.`);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("An error occurred while processing the QR code.");
          console.error("QR Scan Error:", err);
        }
      }
    };

    processScan();

    // Cleanup function to prevent state updates if the component unmounts
    return () => {
      isMounted = false;
    };
  }, [qr_code_id]);

  // Error State UI
  if (error) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100dvh', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Typography color="error" variant="body1" sx={{ textAlign: 'center' }}>
          {error}
        </Typography>
      </Box>
    );
  }

  // Premium Loading State UI
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100dvh', // Use dvh for better mobile browser support
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        gap: 4
      }}
    >
      <CircularProgress 
        size={50} 
        thickness={2} 
        sx={{ 
          color: 'primary.main',
          filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.15))' 
        }} 
      />
      <Typography 
        variant="button" 
        sx={{ 
          fontWeight: 400, 
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          animation: 'pulse 2s infinite ease-in-out',
          '@keyframes pulse': {
            '0%': { opacity: 0.5 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.5 },
          }
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}