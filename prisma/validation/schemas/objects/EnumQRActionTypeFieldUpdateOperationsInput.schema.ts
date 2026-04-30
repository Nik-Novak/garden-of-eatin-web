import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionTypeSchema } from '../enums/QRActionType.schema'

const makeSchema = () => z.object({
  set: QRActionTypeSchema.optional()
}).strict();
export const EnumQRActionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumQRActionTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumQRActionTypeFieldUpdateOperationsInput>;
export const EnumQRActionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
