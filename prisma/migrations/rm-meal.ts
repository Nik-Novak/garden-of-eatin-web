//rm-meal.ts
import { database } from "../database/database";

export default async function rmDebugMeal(id:string){
  if(!id)
    throw Error("Must provide a meal id in commandline parameters");
  let t = await database.meal.delete({where:{id}})
  console.log('Successfully deleted', t.name);
}