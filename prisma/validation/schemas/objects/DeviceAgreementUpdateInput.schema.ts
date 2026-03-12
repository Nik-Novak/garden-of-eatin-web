import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema as DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema } from './DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInput.schema';
import { AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema as AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema } from './AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInput.schema'

const makeSchema = () => z.object({
  opened: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device: z.lazy(() => DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema).optional(),
  agreement: z.lazy(() => AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema).optional()
}).strict();
export const DeviceAgreementUpdateInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateInput>;
export const DeviceAgreementUpdateInputObjectZodSchema = makeSchema();
