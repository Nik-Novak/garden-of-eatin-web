import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceMeal_idStartEndCompoundUniqueInputObjectSchema as MealOccurrenceMeal_idStartEndCompoundUniqueInputObjectSchema } from './MealOccurrenceMeal_idStartEndCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id_start_end: z.lazy(() => MealOccurrenceMeal_idStartEndCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MealOccurrenceWhereUniqueInputObjectSchema: z.ZodType<Prisma.MealOccurrenceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceWhereUniqueInput>;
export const MealOccurrenceWhereUniqueInputObjectZodSchema = makeSchema();
