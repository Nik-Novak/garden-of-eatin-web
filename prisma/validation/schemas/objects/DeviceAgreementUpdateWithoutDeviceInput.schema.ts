import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema as AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema } from './AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInput.schema'

const makeSchema = () => z.object({
  opened: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  agreement: z.lazy(() => AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema).optional()
}).strict();
export const DeviceAgreementUpdateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateWithoutDeviceInput>;
export const DeviceAgreementUpdateWithoutDeviceInputObjectZodSchema = makeSchema();
