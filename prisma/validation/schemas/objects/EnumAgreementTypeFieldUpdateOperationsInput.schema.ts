import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema'

const makeSchema = () => z.object({
  set: AgreementTypeSchema.optional()
}).strict();
export const EnumAgreementTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAgreementTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAgreementTypeFieldUpdateOperationsInput>;
export const EnumAgreementTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
