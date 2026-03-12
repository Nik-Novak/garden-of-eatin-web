import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { EnumAgreementTypeFieldUpdateOperationsInputObjectSchema as EnumAgreementTypeFieldUpdateOperationsInputObjectSchema } from './EnumAgreementTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceAgreementUpdateManyWithoutAgreementNestedInputObjectSchema as DeviceAgreementUpdateManyWithoutAgreementNestedInputObjectSchema } from './DeviceAgreementUpdateManyWithoutAgreementNestedInput.schema'

const makeSchema = () => z.object({
  agreement_type: z.union([AgreementTypeSchema, z.lazy(() => EnumAgreementTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  effective_date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_md: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_agreeents: z.lazy(() => DeviceAgreementUpdateManyWithoutAgreementNestedInputObjectSchema).optional()
}).strict();
export const AgreementUpdateInputObjectSchema: z.ZodType<Prisma.AgreementUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateInput>;
export const AgreementUpdateInputObjectZodSchema = makeSchema();
