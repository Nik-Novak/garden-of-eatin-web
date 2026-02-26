import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewCreateWithoutMealInputObjectSchema as ReviewCreateWithoutMealInputObjectSchema } from './ReviewCreateWithoutMealInput.schema';
import { ReviewUncheckedCreateWithoutMealInputObjectSchema as ReviewUncheckedCreateWithoutMealInputObjectSchema } from './ReviewUncheckedCreateWithoutMealInput.schema';
import { ReviewCreateOrConnectWithoutMealInputObjectSchema as ReviewCreateOrConnectWithoutMealInputObjectSchema } from './ReviewCreateOrConnectWithoutMealInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutMealInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutMealInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutMealInput.schema';
import { ReviewCreateManyMealInputEnvelopeObjectSchema as ReviewCreateManyMealInputEnvelopeObjectSchema } from './ReviewCreateManyMealInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutMealInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutMealInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutMealInput.schema';
import { ReviewUpdateManyWithWhereWithoutMealInputObjectSchema as ReviewUpdateManyWithWhereWithoutMealInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutMealInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewCreateWithoutMealInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyMealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutMealInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutMealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedUpdateManyWithoutMealNestedInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutMealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutMealNestedInput>;
export const ReviewUncheckedUpdateManyWithoutMealNestedInputObjectZodSchema = makeSchema();
