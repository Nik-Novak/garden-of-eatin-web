import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutReviewsInputObjectSchema as DeviceUpdateWithoutReviewsInputObjectSchema } from './DeviceUpdateWithoutReviewsInput.schema';
import { DeviceUncheckedUpdateWithoutReviewsInputObjectSchema as DeviceUncheckedUpdateWithoutReviewsInputObjectSchema } from './DeviceUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutReviewsInput>;
export const DeviceUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
