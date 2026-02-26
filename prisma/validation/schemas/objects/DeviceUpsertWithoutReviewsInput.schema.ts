import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceUpdateWithoutReviewsInputObjectSchema as DeviceUpdateWithoutReviewsInputObjectSchema } from './DeviceUpdateWithoutReviewsInput.schema';
import { DeviceUncheckedUpdateWithoutReviewsInputObjectSchema as DeviceUncheckedUpdateWithoutReviewsInputObjectSchema } from './DeviceUncheckedUpdateWithoutReviewsInput.schema';
import { DeviceCreateWithoutReviewsInputObjectSchema as DeviceCreateWithoutReviewsInputObjectSchema } from './DeviceCreateWithoutReviewsInput.schema';
import { DeviceUncheckedCreateWithoutReviewsInputObjectSchema as DeviceUncheckedCreateWithoutReviewsInputObjectSchema } from './DeviceUncheckedCreateWithoutReviewsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutReviewsInput>;
export const DeviceUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
