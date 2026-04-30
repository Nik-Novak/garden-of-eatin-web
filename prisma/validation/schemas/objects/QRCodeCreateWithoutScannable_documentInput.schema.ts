import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { QRScanCreateNestedManyWithoutQr_codeInputObjectSchema as QRScanCreateNestedManyWithoutQr_codeInputObjectSchema } from './QRScanCreateNestedManyWithoutQr_codeInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  qr_scans: z.lazy(() => QRScanCreateNestedManyWithoutQr_codeInputObjectSchema).optional()
}).strict();
export const QRCodeCreateWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeCreateWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateWithoutScannable_documentInput>;
export const QRCodeCreateWithoutScannable_documentInputObjectZodSchema = makeSchema();
