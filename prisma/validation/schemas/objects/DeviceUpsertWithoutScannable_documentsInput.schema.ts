import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutScannable_documentsInputObjectSchema as DeviceUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUpdateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedUpdateWithoutScannable_documentsInput.schema';
import { DeviceCreateWithoutScannable_documentsInputObjectSchema as DeviceCreateWithoutScannable_documentsInputObjectSchema } from './DeviceCreateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedCreateWithoutScannable_documentsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutScannable_documentsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutScannable_documentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutScannable_documentsInput>;
export const DeviceUpsertWithoutScannable_documentsInputObjectZodSchema = makeSchema();
