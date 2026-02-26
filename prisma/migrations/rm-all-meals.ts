//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmDAllMeals(){
  let t = await database.meal.deleteMany({});
  console.log('Successfully deleted', t.count, 'meals');
}