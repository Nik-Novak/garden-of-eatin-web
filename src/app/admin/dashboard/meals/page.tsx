import { canViewAdminMeals } from "@/actions/access";
import { fetchDashboardDevices } from "@/actions/device";
import { fetchDashboardMeals } from "@/actions/meal";
import AccessDenied from "@/components/ui/AccessDenied";
import DeviceDashboardClient from "@/components/ui/DeviceDashboardClient";
import MealDashboardClient from "@/components/ui/MealDashboardClient";

export default async function MealsPage() {
  const shouldDisplay = await canViewAdminMeals();
  if(!shouldDisplay){
    return (
      <AccessDenied subject="the administrative meals dashboard" />
    )
  }
  const initialMeals = await fetchDashboardMeals();

  return <MealDashboardClient initialMeals={initialMeals} />;
}