import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealScalarWhereInputObjectSchema as MealScalarWhereInputObjectSchema } from './MealScalarWhereInput.schema';
import { MealUpdateManyMutationInputObjectSchema as MealUpdateManyMutationInputObjectSchema } from './MealUpdateManyMutationInput.schema';
import { MealUncheckedUpdateManyWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedUpdateManyWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedUpdateManyWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealUpdateManyMutationInputObjectSchema), z.lazy(() => MealUncheckedUpdateManyWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInput>;
export const MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
