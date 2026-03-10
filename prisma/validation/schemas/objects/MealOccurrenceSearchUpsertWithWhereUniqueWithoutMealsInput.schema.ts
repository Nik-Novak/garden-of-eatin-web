import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema as MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutMealsInput.schema';
import { MealOccurrenceSearchCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutMealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInput>;
export const MealOccurrenceSearchUpsertWithWhereUniqueWithoutMealsInputObjectZodSchema = makeSchema();
