import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema';
import { WebDeviceUpdateWithoutQr_scansInputObjectSchema as WebDeviceUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUpdateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WebDeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)])
}).strict();
export const WebDeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateToOneWithWhereWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateToOneWithWhereWithoutQr_scansInput>;
export const WebDeviceUpdateToOneWithWhereWithoutQr_scansInputObjectZodSchema = makeSchema();
