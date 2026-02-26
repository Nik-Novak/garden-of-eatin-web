import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutDeviceInputObjectSchema as ReviewUpdateWithoutDeviceInputObjectSchema } from './ReviewUpdateWithoutDeviceInput.schema';
import { ReviewUncheckedUpdateWithoutDeviceInputObjectSchema as ReviewUncheckedUpdateWithoutDeviceInputObjectSchema } from './ReviewUncheckedUpdateWithoutDeviceInput.schema';
import { ReviewCreateWithoutDeviceInputObjectSchema as ReviewCreateWithoutDeviceInputObjectSchema } from './ReviewCreateWithoutDeviceInput.schema';
import { ReviewUncheckedCreateWithoutDeviceInputObjectSchema as ReviewUncheckedCreateWithoutDeviceInputObjectSchema } from './ReviewUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutDeviceInput>;
export const ReviewUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
