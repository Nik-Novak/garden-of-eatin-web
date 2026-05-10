import { canViewAdminDevices } from "@/actions/access";
import { fetchDashboardDevices } from "@/actions/device";
import AccessDenied from "@/components/ui/AccessDenied";
import DeviceDashboardClient from "@/components/ui/DeviceDashboardClient";

export default async function DevicesPage() {
  const shouldDisplay = await canViewAdminDevices();
  if(!shouldDisplay){
    return (
      <AccessDenied subject="the administrative devices dashboard" />
    )
  }
  // Fetches on the server during SSR
  const initialDevices = await fetchDashboardDevices();

  return <DeviceDashboardClient initialDevices={initialDevices} />;
}