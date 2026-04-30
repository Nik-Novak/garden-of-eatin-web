import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dark_mode: SortOrderSchema.optional()
}).strict();
export const QRCodePrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodePrintSettingsOrderByInput>;
export const QRCodePrintSettingsOrderByInputObjectZodSchema = makeSchema();
