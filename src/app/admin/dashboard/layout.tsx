import AuthRouteGuard from "@/components/providers/AuthRouteGuard";
import QueryClientProvider from "@/components/providers/QueryClientProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthRouteGuard permissions={{admin_dashboard:['view']}} subject="the admin area">
      <QueryClientProvider>
        {children}
      </QueryClientProvider>
    </AuthRouteGuard>
  )
}