import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutMealInputObjectSchema as ReviewCreateWithoutMealInputObjectSchema } from './ReviewCreateWithoutMealInput.schema';
import { ReviewUncheckedCreateWithoutMealInputObjectSchema as ReviewUncheckedCreateWithoutMealInputObjectSchema } from './ReviewUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutMealInput>;
export const ReviewCreateOrConnectWithoutMealInputObjectZodSchema = makeSchema();
