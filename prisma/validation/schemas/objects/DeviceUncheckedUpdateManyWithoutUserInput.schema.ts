import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceHardwareNullableUpdateEnvelopeInputObjectSchema as DeviceHardwareNullableUpdateEnvelopeInputObjectSchema } from './DeviceHardwareNullableUpdateEnvelopeInput.schema';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema';
import { DeviceSettingsUpdateEnvelopeInputObjectSchema as DeviceSettingsUpdateEnvelopeInputObjectSchema } from './DeviceSettingsUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hardware: z.union([z.lazy(() => DeviceHardwareNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceHardwareCreateInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DeviceUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedUpdateManyWithoutUserInput>;
export const DeviceUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
