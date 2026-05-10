//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmAllSessions(){
  let t = await database.session.deleteMany({});
  console.log('Successfully deleted', t.count, 'sessions');
}