import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutMealInputObjectSchema as ReviewUpdateWithoutMealInputObjectSchema } from './ReviewUpdateWithoutMealInput.schema';
import { ReviewUncheckedUpdateWithoutMealInputObjectSchema as ReviewUncheckedUpdateWithoutMealInputObjectSchema } from './ReviewUncheckedUpdateWithoutMealInput.schema';
import { ReviewCreateWithoutMealInputObjectSchema as ReviewCreateWithoutMealInputObjectSchema } from './ReviewCreateWithoutMealInput.schema';
import { ReviewUncheckedCreateWithoutMealInputObjectSchema as ReviewUncheckedCreateWithoutMealInputObjectSchema } from './ReviewUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutMealInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutMealInput>;
export const ReviewUpsertWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
