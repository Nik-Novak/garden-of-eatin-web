//add-debug-meal.ts
import { database } from "../database/database";

export default async function approveMeals(){
  let meals = await database.meal.updateMany({where:{}, data:{approved:true}});
  console.log('Successfully approved', meals.count, 'meals');
}