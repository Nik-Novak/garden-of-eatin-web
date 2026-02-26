import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutReviewsInputObjectSchema as MealCreateWithoutReviewsInputObjectSchema } from './MealCreateWithoutReviewsInput.schema';
import { MealUncheckedCreateWithoutReviewsInputObjectSchema as MealUncheckedCreateWithoutReviewsInputObjectSchema } from './MealUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutReviewsInput>;
export const MealCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
