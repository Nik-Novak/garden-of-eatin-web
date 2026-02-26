import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealOccurrenceScalarWhereInputObjectSchema as MealOccurrenceScalarWhereInputObjectSchema } from './MealOccurrenceScalarWhereInput.schema';
import { MealOccurrenceUpdateManyMutationInputObjectSchema as MealOccurrenceUpdateManyMutationInputObjectSchema } from './MealOccurrenceUpdateManyMutationInput.schema';
import { MealOccurrenceUncheckedUpdateManyWithoutMealInputObjectSchema as MealOccurrenceUncheckedUpdateManyWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedUpdateManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceUpdateManyMutationInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedUpdateManyWithoutMealInputObjectSchema)])
}).strict();
export const MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUpdateManyWithWhereWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUpdateManyWithWhereWithoutMealInput>;
export const MealOccurrenceUpdateManyWithWhereWithoutMealInputObjectZodSchema = makeSchema();
