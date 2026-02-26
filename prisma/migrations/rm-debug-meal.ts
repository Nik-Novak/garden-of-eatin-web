//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmDebugMeal(){
  let t = await database.meal.deleteMany({where:{name:{contains:'Debug'}}});
  console.log('Successfully deleted', t.count, 'debug meals');
}