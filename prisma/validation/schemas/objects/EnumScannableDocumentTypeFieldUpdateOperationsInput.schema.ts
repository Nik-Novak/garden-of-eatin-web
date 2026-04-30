import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema'

const makeSchema = () => z.object({
  set: ScannableDocumentTypeSchema.optional()
}).strict();
export const EnumScannableDocumentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumScannableDocumentTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumScannableDocumentTypeFieldUpdateOperationsInput>;
export const EnumScannableDocumentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
