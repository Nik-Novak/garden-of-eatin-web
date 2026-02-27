import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutReviewsInputObjectSchema as MealCreateWithoutReviewsInputObjectSchema } from './MealCreateWithoutReviewsInput.schema';
import { MealUncheckedCreateWithoutReviewsInputObjectSchema as MealUncheckedCreateWithoutReviewsInputObjectSchema } from './MealUncheckedCreateWithoutReviewsInput.schema';
import { MealCreateOrConnectWithoutReviewsInputObjectSchema as MealCreateOrConnectWithoutReviewsInputObjectSchema } from './MealCreateOrConnectWithoutReviewsInput.schema';
import { MealUpsertWithoutReviewsInputObjectSchema as MealUpsertWithoutReviewsInputObjectSchema } from './MealUpsertWithoutReviewsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateToOneWithWhereWithoutReviewsInputObjectSchema as MealUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './MealUpdateToOneWithWhereWithoutReviewsInput.schema';
import { MealUpdateWithoutReviewsInputObjectSchema as MealUpdateWithoutReviewsInputObjectSchema } from './MealUpdateWithoutReviewsInput.schema';
import { MealUncheckedUpdateWithoutReviewsInputObjectSchema as MealUncheckedUpdateWithoutReviewsInputObjectSchema } from './MealUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => MealUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => MealUpdateWithoutReviewsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const MealUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.MealUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateOneRequiredWithoutReviewsNestedInput>;
export const MealUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
