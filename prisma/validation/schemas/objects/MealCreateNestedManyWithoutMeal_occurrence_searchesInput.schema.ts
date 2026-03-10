import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateOrConnectWithoutMeal_occurrence_searchesInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema).array(), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.MealCreateNestedManyWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedManyWithoutMeal_occurrence_searchesInput>;
export const MealCreateNestedManyWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
