import QueryClientProvider from "@/components/providers/QueryClientProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider>
      {children}
    </QueryClientProvider>
  )
}