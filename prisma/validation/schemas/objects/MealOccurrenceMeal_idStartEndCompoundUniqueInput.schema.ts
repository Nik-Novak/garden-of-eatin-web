import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  meal_id: z.string(),
  start: z.date(),
  end: z.date()
}).strict();
export const MealOccurrenceMeal_idStartEndCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MealOccurrenceMeal_idStartEndCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceMeal_idStartEndCompoundUniqueInput>;
export const MealOccurrenceMeal_idStartEndCompoundUniqueInputObjectZodSchema = makeSchema();
