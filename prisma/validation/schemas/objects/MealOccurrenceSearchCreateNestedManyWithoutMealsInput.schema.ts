import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutMealsInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema).array(), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceSearchCreateNestedManyWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateNestedManyWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateNestedManyWithoutMealsInput>;
export const MealOccurrenceSearchCreateNestedManyWithoutMealsInputObjectZodSchema = makeSchema();
