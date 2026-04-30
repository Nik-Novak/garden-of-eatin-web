import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  qr_action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  web_device_id: z.string().optional().nullable(),
  device_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const QRScanUncheckedCreateWithoutQr_codeInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedCreateWithoutQr_codeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedCreateWithoutQr_codeInput>;
export const QRScanUncheckedCreateWithoutQr_codeInputObjectZodSchema = makeSchema();
