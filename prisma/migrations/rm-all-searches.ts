//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmAllSearches(){
  let t = await database.mealOccurrenceSearch.deleteMany({});
  console.log('Successfully deleted', t.count, 'meal_occurrence_searches');
  t = await database.mealSearchHit.deleteMany({});
  console.log('Successfully deleted', t.count, 'meal_search_hits');
}