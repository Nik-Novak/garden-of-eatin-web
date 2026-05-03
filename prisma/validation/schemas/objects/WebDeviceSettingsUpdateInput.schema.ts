import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dark_mode: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const WebDeviceSettingsUpdateInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsUpdateInput>;
export const WebDeviceSettingsUpdateInputObjectZodSchema = makeSchema();
