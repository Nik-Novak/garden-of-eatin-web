import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema as MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutMealsInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutMealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutMealsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutMealsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInput>;
export const MealOccurrenceSearchUpdateWithWhereUniqueWithoutMealsInputObjectZodSchema = makeSchema();
