import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema as WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema } from './WebDeviceMetadataNullableUpdateEnvelopeInput.schema';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceSettingsUpdateEnvelopeInputObjectSchema as WebDeviceSettingsUpdateEnvelopeInputObjectSchema } from './WebDeviceSettingsUpdateEnvelopeInput.schema';
import { WebDeviceSettingsCreateInputObjectSchema as WebDeviceSettingsCreateInputObjectSchema } from './WebDeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_id: z.union([z.string().max(24), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([z.lazy(() => WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceMetadataCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => WebDeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => WebDeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WebDeviceUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutUserInput>;
export const WebDeviceUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
