import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_occurrence_searchesInput>;
export const MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
