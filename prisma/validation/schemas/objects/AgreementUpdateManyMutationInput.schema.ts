import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { EnumAgreementTypeFieldUpdateOperationsInputObjectSchema as EnumAgreementTypeFieldUpdateOperationsInputObjectSchema } from './EnumAgreementTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  agreement_type: z.union([AgreementTypeSchema, z.lazy(() => EnumAgreementTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  effective_date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_md: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AgreementUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateManyMutationInput>;
export const AgreementUpdateManyMutationInputObjectZodSchema = makeSchema();
