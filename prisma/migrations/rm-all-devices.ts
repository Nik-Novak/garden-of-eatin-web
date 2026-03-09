//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmAllMeals(){
  let t = await database.device.deleteMany({});
  console.log('Successfully deleted', t.count, 'devices');
}