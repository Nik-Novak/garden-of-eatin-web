import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodePrintSettingsCreateInputObjectSchema as QRCodePrintSettingsCreateInputObjectSchema } from './QRCodePrintSettingsCreateInput.schema';
import { QRCodePrintSettingsUpdateInputObjectSchema as QRCodePrintSettingsUpdateInputObjectSchema } from './QRCodePrintSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRCodePrintSettingsCreateInputObjectSchema),
  update: z.lazy(() => QRCodePrintSettingsUpdateInputObjectSchema)
}).strict();
export const QRCodePrintSettingsUpsertInputObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodePrintSettingsUpsertInput>;
export const QRCodePrintSettingsUpsertInputObjectZodSchema = makeSchema();
