import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutMealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutMealsInput>;
export const MealOccurrenceSearchCreateOrConnectWithoutMealsInputObjectZodSchema = makeSchema();
