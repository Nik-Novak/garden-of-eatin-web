import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema as MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUpdateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_occurrence_searchesInput.schema';
import { MealCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealUpdateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInput>;
export const MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
