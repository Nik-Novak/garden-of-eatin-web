import { fetchDashboardDevices } from "@/actions/device";
import { fetchDashboardMeals } from "@/actions/meal";
import DeviceDashboardClient from "@/components/ui/DeviceDashboardClient";
import MealDashboardClient from "@/components/ui/MealDashboardClient";

export default async function MealsPage() {
  // Fetches on the server during SSR
  const initialMeals = await fetchDashboardMeals();

  return <MealDashboardClient initialMeals={initialMeals} />;
}