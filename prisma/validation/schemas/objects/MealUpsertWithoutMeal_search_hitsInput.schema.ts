import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealUpdateWithoutMeal_search_hitsInputObjectSchema as MealUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUpdateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_search_hitsInput.schema';
import { MealCreateWithoutMeal_search_hitsInputObjectSchema as MealCreateWithoutMeal_search_hitsInputObjectSchema } from './MealCreateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_search_hitsInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealUpdateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema)]),
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealUpsertWithoutMeal_search_hitsInputObjectSchema: z.ZodType<Prisma.MealUpsertWithoutMeal_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithoutMeal_search_hitsInput>;
export const MealUpsertWithoutMeal_search_hitsInputObjectZodSchema = makeSchema();
