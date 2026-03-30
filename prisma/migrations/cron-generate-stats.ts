// cron-generate-occurrences.ts
import spacetime from "spacetime";
import { database } from "../database";

export default async function cronGenerateStats() {
  console.log(`🕒 Generating PlatformUsageStats on ${spacetime().goto('America/Los_Angeles').format('MM/DD/YYYY')}`);
  let latestStats = await database.platformUsageStats.findFirst({orderBy:{created_at:'desc'}});
  const latest_total_meal_interactions = (latestStats?.total_meal_views||0) + (latestStats?.total_meal_navs||0) + (latestStats?.total_meal_shares||0);

  const total_devices = await database.device.count();
  const total_meal_searches = await database.mealOccurrenceSearch.count();
  const total_meal_impressions = await database.mealSearchHit.count();
  const total_meal_views = await database.mealInteraction.count({where:{interaction_type:'View'}});
  const total_meal_navs = await database.mealInteraction.count({where:{interaction_type:'Navigate'}});
  const total_meal_shares = await database.mealInteraction.count({where:{interaction_type:'Share'}});

  const total_meal_interactions = total_meal_views + total_meal_navs + total_meal_shares;

  let newStats = await database.platformUsageStats.create({
    data:{
      total_devices,
      total_meal_searches,
      total_meal_impressions,
      total_meal_views,
      total_meal_navs,
      total_meal_shares
    }
  });
  console.log(`total_devices: ${total_devices} ${latestStats ? `(${newStats.total_devices>=latestStats.total_devices?'+':'-'}${Math.abs(newStats.total_devices-latestStats.total_devices)})` : ''}`)
  console.log(`total_meal_searches: ${total_meal_searches} ${latestStats ? `(${newStats.total_meal_searches>=latestStats.total_meal_searches?'+':'-'}${Math.abs(newStats.total_meal_searches-latestStats.total_meal_searches)})` : ''}`)
  console.log(`total_meal_impressions: ${total_meal_impressions} ${latestStats ? `(${newStats.total_meal_impressions>=latestStats.total_meal_impressions?'+':'-'}${Math.abs(newStats.total_meal_impressions-latestStats.total_meal_impressions)})` : ''}`)
  console.log(`total_meal_views: ${total_meal_views} ${latestStats ? `(${newStats.total_meal_views>=latestStats.total_meal_views?'+':'-'}${Math.abs(newStats.total_meal_views-latestStats.total_meal_views)})` : ''}`)
  console.log(`total_meal_navs: ${total_meal_navs} ${latestStats ? `(${newStats.total_meal_navs>=latestStats.total_meal_navs?'+':'-'}${Math.abs(newStats.total_meal_navs-latestStats.total_meal_navs)})` : ''}`)
  console.log(`total_meal_shares: ${total_meal_shares} ${latestStats ? `(${newStats.total_meal_shares>=latestStats.total_meal_shares?'+':'-'}${Math.abs(newStats.total_meal_shares-latestStats.total_meal_shares)})` : ''}`)
  console.log(`total_meal_interactions: ${total_meal_interactions} ${latestStats ? `(${total_meal_interactions>=latest_total_meal_interactions?'+':'-'}${Math.abs(total_meal_interactions-latest_total_meal_interactions)})` : ''}`)
  console.log(`✅ PlatformStats up-to-date.`);
}