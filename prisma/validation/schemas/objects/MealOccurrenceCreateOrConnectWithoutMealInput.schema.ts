import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceCreateWithoutMealInputObjectSchema as MealOccurrenceCreateWithoutMealInputObjectSchema } from './MealOccurrenceCreateWithoutMealInput.schema';
import { MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema as MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateOrConnectWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateOrConnectWithoutMealInput>;
export const MealOccurrenceCreateOrConnectWithoutMealInputObjectZodSchema = makeSchema();
