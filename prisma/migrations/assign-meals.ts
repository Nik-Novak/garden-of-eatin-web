import { database } from "../database/database";

export default async function assignMeals() {

  let submitter_id = '69c41a80c149b2309909bef6';

  let updatedMeals = await database.meal.updateMany({data:{submitter_id}})

  console.log(`Successfully updated submitter_id to ${submitter_id} for ${updatedMeals.count} meals.`);
}