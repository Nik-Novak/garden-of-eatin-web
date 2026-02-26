import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewCreateWithoutDeviceInputObjectSchema as ReviewCreateWithoutDeviceInputObjectSchema } from './ReviewCreateWithoutDeviceInput.schema';
import { ReviewUncheckedCreateWithoutDeviceInputObjectSchema as ReviewUncheckedCreateWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateWithoutDeviceInput.schema';
import { ReviewCreateOrConnectWithoutDeviceInputObjectSchema as ReviewCreateOrConnectWithoutDeviceInputObjectSchema } from './ReviewCreateOrConnectWithoutDeviceInput.schema';
import { ReviewCreateManyDeviceInputEnvelopeObjectSchema as ReviewCreateManyDeviceInputEnvelopeObjectSchema } from './ReviewCreateManyDeviceInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateNestedManyWithoutDeviceInput>;
export const ReviewCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
