import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutDeviceInputObjectSchema as ReviewUpdateWithoutDeviceInputObjectSchema } from './ReviewUpdateWithoutDeviceInput.schema';
import { ReviewUncheckedUpdateWithoutDeviceInputObjectSchema as ReviewUncheckedUpdateWithoutDeviceInputObjectSchema } from './ReviewUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutDeviceInput>;
export const ReviewUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
