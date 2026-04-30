import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  qr_code_id: z.string(),
  qr_action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  device_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const QRScanUncheckedCreateWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanUncheckedCreateWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUncheckedCreateWithoutWeb_deviceInput>;
export const QRScanUncheckedCreateWithoutWeb_deviceInputObjectZodSchema = makeSchema();
