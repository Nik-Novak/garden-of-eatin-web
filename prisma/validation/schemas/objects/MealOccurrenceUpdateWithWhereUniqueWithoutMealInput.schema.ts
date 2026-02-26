import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceUpdateWithoutMealInputObjectSchema as MealOccurrenceUpdateWithoutMealInputObjectSchema } from './MealOccurrenceUpdateWithoutMealInput.schema';
import { MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema as MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedUpdateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceUpdateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema)])
}).strict();
export const MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUpdateWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUpdateWithWhereUniqueWithoutMealInput>;
export const MealOccurrenceUpdateWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
