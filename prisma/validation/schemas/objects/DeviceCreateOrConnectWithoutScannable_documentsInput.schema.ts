import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutScannable_documentsInputObjectSchema as DeviceCreateWithoutScannable_documentsInputObjectSchema } from './DeviceCreateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedCreateWithoutScannable_documentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutScannable_documentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutScannable_documentsInput>;
export const DeviceCreateOrConnectWithoutScannable_documentsInputObjectZodSchema = makeSchema();
