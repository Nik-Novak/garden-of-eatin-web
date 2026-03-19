//rm-meal-occurrences.ts
import { database } from "../database/database";

export default async function rmMealOccurrences(meal_id:string){
  if(!meal_id)
    throw Error("Must provide a meal id in commandline parameters");
  let t = await database.mealOccurrence.deleteMany({where:{meal_id}});
  console.log('Successfully deleted', t.count, 'meal_occurrences for meal @', meal_id);
}