"use client";
import { getQueryClient } from "@/lib/query-client";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "@tanstack/react-query";

export default function QueryClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseQueryClientProvider client={getQueryClient()}>
      {children}
    </BaseQueryClientProvider>
  )
}