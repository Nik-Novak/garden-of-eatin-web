import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealUpdateWithoutMeal_search_hitsInputObjectSchema as MealUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUpdateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_search_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealUpdateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema)])
}).strict();
export const MealUpdateToOneWithWhereWithoutMeal_search_hitsInputObjectSchema: z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_search_hitsInput>;
export const MealUpdateToOneWithWhereWithoutMeal_search_hitsInputObjectZodSchema = makeSchema();
