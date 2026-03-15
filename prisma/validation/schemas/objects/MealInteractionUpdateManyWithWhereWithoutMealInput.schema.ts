import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionScalarWhereInputObjectSchema as MealInteractionScalarWhereInputObjectSchema } from './MealInteractionScalarWhereInput.schema';
import { MealInteractionUpdateManyMutationInputObjectSchema as MealInteractionUpdateManyMutationInputObjectSchema } from './MealInteractionUpdateManyMutationInput.schema';
import { MealInteractionUncheckedUpdateManyWithoutMealInputObjectSchema as MealInteractionUncheckedUpdateManyWithoutMealInputObjectSchema } from './MealInteractionUncheckedUpdateManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealInteractionUpdateManyMutationInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateManyWithoutMealInputObjectSchema)])
}).strict();
export const MealInteractionUpdateManyWithWhereWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateManyWithWhereWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateManyWithWhereWithoutMealInput>;
export const MealInteractionUpdateManyWithWhereWithoutMealInputObjectZodSchema = makeSchema();
