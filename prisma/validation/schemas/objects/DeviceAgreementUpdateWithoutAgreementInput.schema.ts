import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema as DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema } from './DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInput.schema'

const makeSchema = () => z.object({
  opened: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device: z.lazy(() => DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema).optional()
}).strict();
export const DeviceAgreementUpdateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateWithoutAgreementInput>;
export const DeviceAgreementUpdateWithoutAgreementInputObjectZodSchema = makeSchema();
