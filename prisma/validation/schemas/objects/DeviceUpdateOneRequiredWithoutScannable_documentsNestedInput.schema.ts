import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutScannable_documentsInputObjectSchema as DeviceCreateWithoutScannable_documentsInputObjectSchema } from './DeviceCreateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedCreateWithoutScannable_documentsInput.schema';
import { DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema as DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema } from './DeviceCreateOrConnectWithoutScannable_documentsInput.schema';
import { DeviceUpsertWithoutScannable_documentsInputObjectSchema as DeviceUpsertWithoutScannable_documentsInputObjectSchema } from './DeviceUpsertWithoutScannable_documentsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutScannable_documentsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutScannable_documentsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutScannable_documentsInput.schema';
import { DeviceUpdateWithoutScannable_documentsInputObjectSchema as DeviceUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUpdateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedUpdateWithoutScannable_documentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutScannable_documentsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutScannable_documentsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutScannable_documentsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutScannable_documentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutScannable_documentsNestedInput>;
export const DeviceUpdateOneRequiredWithoutScannable_documentsNestedInputObjectZodSchema = makeSchema();
