import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import { Roboto, Lora } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/features/theme';
import { NotificationProvider } from "@/components/NotificationQueue";
import FloatingNav from "@/components/FloatingNav";
import { CssBaseline } from "@mui/material";

// Initialize Lora for Headings
const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

// Initialize Roboto for Body Text
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Garden of Eatin'",
  description: "Connecting communities through the power of a shared meal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply BOTH font variables to the body */}
      <body className={`${lora.variable} ${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NotificationProvider>
              <FloatingNav />
              {children}
            </NotificationProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}