import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutQr_scansInputObjectSchema as DeviceUpdateWithoutQr_scansInputObjectSchema } from './DeviceUpdateWithoutQr_scansInput.schema';
import { DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedUpdateWithoutQr_scansInput.schema';
import { DeviceCreateWithoutQr_scansInputObjectSchema as DeviceCreateWithoutQr_scansInputObjectSchema } from './DeviceCreateWithoutQr_scansInput.schema';
import { DeviceUncheckedCreateWithoutQr_scansInputObjectSchema as DeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedCreateWithoutQr_scansInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutQr_scansInput>;
export const DeviceUpsertWithoutQr_scansInputObjectZodSchema = makeSchema();
