import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrence_searchesInput.schema';
import { MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateOrConnectWithoutMeal_occurrence_searchesInput.schema';
import { MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema as MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema as MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInput.schema';
import { MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectSchema as MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInput.schema';
import { MealScalarWhereInputObjectSchema as MealScalarWhereInputObjectSchema } from './MealScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealCreateWithoutMeal_occurrence_searchesInputObjectSchema).array(), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUpsertWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUpdateWithWhereUniqueWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => MealUpdateManyWithWhereWithoutMeal_occurrence_searchesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealScalarWhereInputObjectSchema), z.lazy(() => MealScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInputObjectSchema: z.ZodType<Prisma.MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInput>;
export const MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInputObjectZodSchema = makeSchema();
