import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceUpdateWithoutQr_scansInputObjectSchema as WebDeviceUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUpdateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutQr_scansInput.schema';
import { WebDeviceCreateWithoutQr_scansInputObjectSchema as WebDeviceCreateWithoutQr_scansInputObjectSchema } from './WebDeviceCreateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedCreateWithoutQr_scansInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WebDeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)]),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]),
  where: z.lazy(() => WebDeviceWhereInputObjectSchema).optional()
}).strict();
export const WebDeviceUpsertWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceUpsertWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpsertWithoutQr_scansInput>;
export const WebDeviceUpsertWithoutQr_scansInputObjectZodSchema = makeSchema();
