import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceCreateWithoutReviewsInputObjectSchema as DeviceCreateWithoutReviewsInputObjectSchema } from './DeviceCreateWithoutReviewsInput.schema';
import { DeviceUncheckedCreateWithoutReviewsInputObjectSchema as DeviceUncheckedCreateWithoutReviewsInputObjectSchema } from './DeviceUncheckedCreateWithoutReviewsInput.schema';
import { DeviceCreateOrConnectWithoutReviewsInputObjectSchema as DeviceCreateOrConnectWithoutReviewsInputObjectSchema } from './DeviceCreateOrConnectWithoutReviewsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutReviewsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutReviewsInput>;
export const DeviceCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
