import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutScannable_documentsInputObjectSchema as DeviceUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUpdateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedUpdateWithoutScannable_documentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutScannable_documentsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutScannable_documentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutScannable_documentsInput>;
export const DeviceUpdateToOneWithWhereWithoutScannable_documentsInputObjectZodSchema = makeSchema();
