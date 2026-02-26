import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutReviewsInputObjectSchema as DeviceCreateWithoutReviewsInputObjectSchema } from './DeviceCreateWithoutReviewsInput.schema';
import { DeviceUncheckedCreateWithoutReviewsInputObjectSchema as DeviceUncheckedCreateWithoutReviewsInputObjectSchema } from './DeviceUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutReviewsInput>;
export const DeviceCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
