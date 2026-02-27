import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealUpdateWithoutReviewsInputObjectSchema as MealUpdateWithoutReviewsInputObjectSchema } from './MealUpdateWithoutReviewsInput.schema';
import { MealUncheckedUpdateWithoutReviewsInputObjectSchema as MealUncheckedUpdateWithoutReviewsInputObjectSchema } from './MealUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealUpdateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const MealUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutReviewsInput>;
export const MealUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
