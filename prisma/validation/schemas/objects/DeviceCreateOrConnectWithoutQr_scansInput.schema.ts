import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutQr_scansInputObjectSchema as DeviceCreateWithoutQr_scansInputObjectSchema } from './DeviceCreateWithoutQr_scansInput.schema';
import { DeviceUncheckedCreateWithoutQr_scansInputObjectSchema as DeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedCreateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutQr_scansInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutQr_scansInput>;
export const DeviceCreateOrConnectWithoutQr_scansInputObjectZodSchema = makeSchema();
