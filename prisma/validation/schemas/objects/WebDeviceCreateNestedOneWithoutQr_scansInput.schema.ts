import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutQr_scansInputObjectSchema as WebDeviceCreateWithoutQr_scansInputObjectSchema } from './WebDeviceCreateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedCreateWithoutQr_scansInput.schema';
import { WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema as WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema } from './WebDeviceCreateOrConnectWithoutQr_scansInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  connect: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const WebDeviceCreateNestedOneWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateNestedOneWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateNestedOneWithoutQr_scansInput>;
export const WebDeviceCreateNestedOneWithoutQr_scansInputObjectZodSchema = makeSchema();
