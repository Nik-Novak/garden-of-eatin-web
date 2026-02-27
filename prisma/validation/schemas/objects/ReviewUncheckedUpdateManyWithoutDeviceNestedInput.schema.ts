import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutDeviceInputObjectSchema as ReviewCreateWithoutDeviceInputObjectSchema } from './ReviewCreateWithoutDeviceInput.schema';
import { ReviewUncheckedCreateWithoutDeviceInputObjectSchema as ReviewUncheckedCreateWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateWithoutDeviceInput.schema';
import { ReviewCreateOrConnectWithoutDeviceInputObjectSchema as ReviewCreateOrConnectWithoutDeviceInputObjectSchema } from './ReviewCreateOrConnectWithoutDeviceInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { ReviewCreateManyDeviceInputEnvelopeObjectSchema as ReviewCreateManyDeviceInputEnvelopeObjectSchema } from './ReviewCreateManyDeviceInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { ReviewUpdateManyWithWhereWithoutDeviceInputObjectSchema as ReviewUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutDeviceInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutDeviceNestedInput>;
export const ReviewUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
