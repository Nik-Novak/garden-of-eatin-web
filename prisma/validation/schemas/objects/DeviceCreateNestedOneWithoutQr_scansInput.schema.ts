import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutQr_scansInputObjectSchema as DeviceCreateWithoutQr_scansInputObjectSchema } from './DeviceCreateWithoutQr_scansInput.schema';
import { DeviceUncheckedCreateWithoutQr_scansInputObjectSchema as DeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedCreateWithoutQr_scansInput.schema';
import { DeviceCreateOrConnectWithoutQr_scansInputObjectSchema as DeviceCreateOrConnectWithoutQr_scansInputObjectSchema } from './DeviceCreateOrConnectWithoutQr_scansInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutQr_scansInput>;
export const DeviceCreateNestedOneWithoutQr_scansInputObjectZodSchema = makeSchema();
