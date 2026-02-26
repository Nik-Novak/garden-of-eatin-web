// cron-generate-occurrences.ts
import spacetime from "spacetime";
import { mealOccurrences } from "@/utils/fns/meal-occurrences";

import { database } from "../database";

/**
 * Safe to run at any time (MongoDB-compatible).
 * Idempotent via manual de-duplication.
 */
export default async function cronGenerateOccurences() {
  console.log("🕒 Generating meal occurrences…");

  // Spacetime uses .toNativeDate() to return a standard JS Date object
  const windowStart = spacetime().subtract(2, "days").toNativeDate();
  const windowEnd = spacetime().add(45, "days").toNativeDate();

  const meals = await database.meal.findMany({
    include: {
      meal_occurrences: {
        where: {
          start: {
            gte: windowStart,
            lte: windowEnd
          }
        },
        select: {
          start: true,
          end: true
        }
      }
    }
  });

  console.log('Found', meals.length, 'meals, and pulled occurrences in window ['+windowStart+','+windowEnd+']');

  let totalInserted = 0;

  for (const meal of meals) {
    if(!meal.approved){
      console.log('SKIPPING', meal.name,'--> Skipped non-approved meal');
      continue;
    }

    const generated = mealOccurrences({
      meal,
      windowStart,
      windowEnd
    });

    console.log('###########',meal.name,'###########');

    if (!generated.length) continue;

    // ---- build existing occurrence lookup ----
    const existing = new Set(
      meal.meal_occurrences.map(o =>
        `${o.start.toISOString()}_${o.end.toISOString()}`
      )
    );

    // ---- filter out duplicates ----
    const toInsert = generated.filter(o =>
      !existing.has(
        `${o.start.toISOString()}_${o.end.toISOString()}`
      )
    );

    if(toInsert.length)
      console.log('Generated', toInsert.length, 'new occurrences.');

    let skippedQuantity = generated.length-toInsert.length;
    if(generated.length!==toInsert.length && skippedQuantity)
      console.log('Skipping', skippedQuantity, 'existing occurrences.');

    if (!toInsert.length) continue;

    // console.log('inserting:',toInsert);
    await database.mealOccurrence.createMany({
      data: toInsert
    });

    totalInserted += toInsert.length;
  }

  console.log(`✅ Meal occurrences up-to-date (+${totalInserted})`);
}