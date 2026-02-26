import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealCreateWithoutReviewsInputObjectSchema as MealCreateWithoutReviewsInputObjectSchema } from './MealCreateWithoutReviewsInput.schema';
import { MealUncheckedCreateWithoutReviewsInputObjectSchema as MealUncheckedCreateWithoutReviewsInputObjectSchema } from './MealUncheckedCreateWithoutReviewsInput.schema';
import { MealCreateOrConnectWithoutReviewsInputObjectSchema as MealCreateOrConnectWithoutReviewsInputObjectSchema } from './MealCreateOrConnectWithoutReviewsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.MealCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedOneWithoutReviewsInput>;
export const MealCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
