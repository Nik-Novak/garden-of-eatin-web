import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitScalarWhereInputObjectSchema as MealSearchHitScalarWhereInputObjectSchema } from './MealSearchHitScalarWhereInput.schema';
import { MealSearchHitUpdateManyMutationInputObjectSchema as MealSearchHitUpdateManyMutationInputObjectSchema } from './MealSearchHitUpdateManyMutationInput.schema';
import { MealSearchHitUncheckedUpdateManyWithoutMealInputObjectSchema as MealSearchHitUncheckedUpdateManyWithoutMealInputObjectSchema } from './MealSearchHitUncheckedUpdateManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealSearchHitUpdateManyMutationInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateManyWithoutMealInputObjectSchema)])
}).strict();
export const MealSearchHitUpdateManyWithWhereWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateManyWithWhereWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateManyWithWhereWithoutMealInput>;
export const MealSearchHitUpdateManyWithWhereWithoutMealInputObjectZodSchema = makeSchema();
