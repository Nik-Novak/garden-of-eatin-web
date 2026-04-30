import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  qr_code_id: z.string().max(24),
  qr_action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  device_id: z.string().max(24).optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const QRScanCreateManyWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanCreateManyWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateManyWeb_deviceInput>;
export const QRScanCreateManyWeb_deviceInputObjectZodSchema = makeSchema();
