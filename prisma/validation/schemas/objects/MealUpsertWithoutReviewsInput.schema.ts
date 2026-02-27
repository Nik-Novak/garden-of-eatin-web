import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealUpdateWithoutReviewsInputObjectSchema as MealUpdateWithoutReviewsInputObjectSchema } from './MealUpdateWithoutReviewsInput.schema';
import { MealUncheckedUpdateWithoutReviewsInputObjectSchema as MealUncheckedUpdateWithoutReviewsInputObjectSchema } from './MealUncheckedUpdateWithoutReviewsInput.schema';
import { MealCreateWithoutReviewsInputObjectSchema as MealCreateWithoutReviewsInputObjectSchema } from './MealCreateWithoutReviewsInput.schema';
import { MealUncheckedCreateWithoutReviewsInputObjectSchema as MealUncheckedCreateWithoutReviewsInputObjectSchema } from './MealUncheckedCreateWithoutReviewsInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealUpdateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.MealUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithoutReviewsInput>;
export const MealUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
