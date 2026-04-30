import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateEnvelopeInputObjectSchema as QRActionCreateEnvelopeInputObjectSchema } from './QRActionCreateEnvelopeInput.schema';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  action: z.union([z.lazy(() => QRActionCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const QRCodeCreateManyScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeCreateManyScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateManyScannable_documentInput>;
export const QRCodeCreateManyScannable_documentInputObjectZodSchema = makeSchema();
