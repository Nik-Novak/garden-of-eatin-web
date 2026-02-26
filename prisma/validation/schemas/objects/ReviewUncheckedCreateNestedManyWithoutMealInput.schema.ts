import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewCreateWithoutMealInputObjectSchema as ReviewCreateWithoutMealInputObjectSchema } from './ReviewCreateWithoutMealInput.schema';
import { ReviewUncheckedCreateWithoutMealInputObjectSchema as ReviewUncheckedCreateWithoutMealInputObjectSchema } from './ReviewUncheckedCreateWithoutMealInput.schema';
import { ReviewCreateOrConnectWithoutMealInputObjectSchema as ReviewCreateOrConnectWithoutMealInputObjectSchema } from './ReviewCreateOrConnectWithoutMealInput.schema';
import { ReviewCreateManyMealInputEnvelopeObjectSchema as ReviewCreateManyMealInputEnvelopeObjectSchema } from './ReviewCreateManyMealInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewCreateWithoutMealInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyMealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutMealInput>;
export const ReviewUncheckedCreateNestedManyWithoutMealInputObjectZodSchema = makeSchema();
