import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutScannable_documentsInputObjectSchema as DeviceCreateWithoutScannable_documentsInputObjectSchema } from './DeviceCreateWithoutScannable_documentsInput.schema';
import { DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema as DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema } from './DeviceUncheckedCreateWithoutScannable_documentsInput.schema';
import { DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema as DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema } from './DeviceCreateOrConnectWithoutScannable_documentsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutScannable_documentsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutScannable_documentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutScannable_documentsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutScannable_documentsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutScannable_documentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutScannable_documentsInput>;
export const DeviceCreateNestedOneWithoutScannable_documentsInputObjectZodSchema = makeSchema();
