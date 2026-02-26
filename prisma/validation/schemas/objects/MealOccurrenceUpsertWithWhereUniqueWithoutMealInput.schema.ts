import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceUpdateWithoutMealInputObjectSchema as MealOccurrenceUpdateWithoutMealInputObjectSchema } from './MealOccurrenceUpdateWithoutMealInput.schema';
import { MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema as MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedUpdateWithoutMealInput.schema';
import { MealOccurrenceCreateWithoutMealInputObjectSchema as MealOccurrenceCreateWithoutMealInputObjectSchema } from './MealOccurrenceCreateWithoutMealInput.schema';
import { MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema as MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealOccurrenceUpdateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedUpdateWithoutMealInputObjectSchema)]),
  create: z.union([z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUpsertWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUpsertWithWhereUniqueWithoutMealInput>;
export const MealOccurrenceUpsertWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
