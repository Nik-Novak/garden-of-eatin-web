import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutMealsInput.schema';
import { MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectSchema as MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectSchema as MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInput.schema';
import { MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectSchema as MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInput.schema';
import { MealOccurrenceSearchScalarWhereInputObjectSchema as MealOccurrenceSearchScalarWhereInputObjectSchema } from './MealOccurrenceSearchScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema).array(), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceSearchUncheckedUpdateManyWithoutMealsNestedInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedUpdateManyWithoutMealsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedUpdateManyWithoutMealsNestedInput>;
export const MealOccurrenceSearchUncheckedUpdateManyWithoutMealsNestedInputObjectZodSchema = makeSchema();
