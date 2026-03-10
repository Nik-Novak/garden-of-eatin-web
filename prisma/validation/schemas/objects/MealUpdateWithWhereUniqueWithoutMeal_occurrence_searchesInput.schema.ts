import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema as MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUpdateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInput>;
export const MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
