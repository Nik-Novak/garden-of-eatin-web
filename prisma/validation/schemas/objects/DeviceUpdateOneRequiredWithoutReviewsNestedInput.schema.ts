import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateWithoutReviewsInputObjectSchema as DeviceCreateWithoutReviewsInputObjectSchema } from './DeviceCreateWithoutReviewsInput.schema';
import { DeviceUncheckedCreateWithoutReviewsInputObjectSchema as DeviceUncheckedCreateWithoutReviewsInputObjectSchema } from './DeviceUncheckedCreateWithoutReviewsInput.schema';
import { DeviceCreateOrConnectWithoutReviewsInputObjectSchema as DeviceCreateOrConnectWithoutReviewsInputObjectSchema } from './DeviceCreateOrConnectWithoutReviewsInput.schema';
import { DeviceUpsertWithoutReviewsInputObjectSchema as DeviceUpsertWithoutReviewsInputObjectSchema } from './DeviceUpsertWithoutReviewsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutReviewsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutReviewsInput.schema';
import { DeviceUpdateWithoutReviewsInputObjectSchema as DeviceUpdateWithoutReviewsInputObjectSchema } from './DeviceUpdateWithoutReviewsInput.schema';
import { DeviceUncheckedUpdateWithoutReviewsInputObjectSchema as DeviceUncheckedUpdateWithoutReviewsInputObjectSchema } from './DeviceUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutReviewsNestedInput>;
export const DeviceUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
