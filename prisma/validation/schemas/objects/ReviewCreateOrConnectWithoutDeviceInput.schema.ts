import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutDeviceInputObjectSchema as ReviewCreateWithoutDeviceInputObjectSchema } from './ReviewCreateWithoutDeviceInput.schema';
import { ReviewUncheckedCreateWithoutDeviceInputObjectSchema as ReviewUncheckedCreateWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutDeviceInput>;
export const ReviewCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
