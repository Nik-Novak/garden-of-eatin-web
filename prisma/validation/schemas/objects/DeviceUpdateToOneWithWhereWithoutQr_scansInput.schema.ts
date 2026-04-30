import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutQr_scansInputObjectSchema as DeviceUpdateWithoutQr_scansInputObjectSchema } from './DeviceUpdateWithoutQr_scansInput.schema';
import { DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutQr_scansInput>;
export const DeviceUpdateToOneWithWhereWithoutQr_scansInputObjectZodSchema = makeSchema();
