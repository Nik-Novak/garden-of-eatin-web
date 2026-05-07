import { fetchDashboardDevices } from "@/actions/device";
import DeviceDashboardClient from "@/components/ui/DeviceDashboardClient";

export default async function DevicesPage() {
  // Fetches on the server during SSR
  const initialDevices = await fetchDashboardDevices();

  return <DeviceDashboardClient initialDevices={initialDevices} />;
}