import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchScalarWhereInputObjectSchema as MealOccurrenceSearchScalarWhereInputObjectSchema } from './MealOccurrenceSearchScalarWhereInput.schema';
import { MealOccurrenceSearchUpdateManyMutationInputObjectSchema as MealOccurrenceSearchUpdateManyMutationInputObjectSchema } from './MealOccurrenceSearchUpdateManyMutationInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutMealsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutMealsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutMealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceSearchUpdateManyMutationInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutMealsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInput>;
export const MealOccurrenceSearchUpdateManyWithWhereWithoutMealsInputObjectZodSchema = makeSchema();
