"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import spacetime from 'spacetime';

type SmartBannerProps = {
  /** Number of days to persist dismissal. Defaults to 30. */
  daysToHide?: number;
  /** Whether to use localStorage (persistent) or sessionStorage (session only) */
  persistent?: boolean;
}

export const SmartBanner = ({ daysToHide = 30, persistent = true }: SmartBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [device, setDevice] = useState<'ios' | 'android' | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    const storage = persistent ? localStorage : sessionStorage;
    const sessionDismissed = storage.getItem('smart-banner-dismissed');
    
    const isDismissed = sessionDismissed 
      ? spacetime(sessionDismissed).diff(spacetime(), 'days') < daysToHide 
      : false;
    
    // NOTE: Uncomment isIOS if you want to use this custom banner instead of the native Apple one
    if ((/*isIOS ||*/ isAndroid) && !isDismissed) {
      setDevice(isIOS ? 'ios' : 'android');
      setIsVisible(true);
    }
  }, [daysToHide, persistent]);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    const storage = persistent ? localStorage : sessionStorage;
    storage.setItem('smart-banner-dismissed', spacetime().isoFull());
  };

  const appStoreUrl = device === 'ios' 
    ? "https://apps.apple.com/us/app/garden-of-eatin/id6759996982" 
    : "https://play.google.com/store/apps/details?id=org.softwareforpeople.gardenofeatin";

  return (
    <Box sx={{
      position: 'sticky', // Changing to sticky pushes content down
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 2000,
      bgcolor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider',
      display: 'flex',
      alignItems: 'center',
      px: 2,
      py: 1.5,
      boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
    }}>
      <IconButton onClick={handleDismiss} size="small" sx={{ mr: 1 }}>
        <CloseIcon fontSize="small" />
      </IconButton>
      
      <Box sx={{ 
        position: 'relative',
        width: 42, 
        height: 42, 
        mr: 2,
        flexShrink: 0,
        borderRadius: '22%', 
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: '0.5px solid rgba(0,0,0,0.1)'
      }}>
        <Image 
          src="/img/icon.png" 
          alt="App Icon" 
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
          Garden of Eatin'
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {device === 'ios' ? 'On the App Store' : 'On the Play Store'}
        </Typography>
      </Box>

      <Button 
        variant="contained" 
        size="small"
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ borderRadius: 50, textTransform: 'none', fontWeight: 600 }}
      >
        View
      </Button>
    </Box>
  );
};