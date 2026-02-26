import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutDeviceInputObjectSchema as ReviewUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutDeviceInput>;
export const ReviewUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
