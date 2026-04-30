import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodePrintSettingsCreateInputObjectSchema as QRCodePrintSettingsCreateInputObjectSchema } from './QRCodePrintSettingsCreateInput.schema';
import { QRCodePrintSettingsUpsertInputObjectSchema as QRCodePrintSettingsUpsertInputObjectSchema } from './QRCodePrintSettingsUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRCodePrintSettingsCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => QRCodePrintSettingsUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const QRCodePrintSettingsNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodePrintSettingsNullableUpdateEnvelopeInput>;
export const QRCodePrintSettingsNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
