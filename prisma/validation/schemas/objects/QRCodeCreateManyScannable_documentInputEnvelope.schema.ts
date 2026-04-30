import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCreateManyScannable_documentInputObjectSchema as QRCodeCreateManyScannable_documentInputObjectSchema } from './QRCodeCreateManyScannable_documentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QRCodeCreateManyScannable_documentInputObjectSchema), z.lazy(() => QRCodeCreateManyScannable_documentInputObjectSchema).array()])
}).strict();
export const QRCodeCreateManyScannable_documentInputEnvelopeObjectSchema: z.ZodType<Prisma.QRCodeCreateManyScannable_documentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCreateManyScannable_documentInputEnvelope>;
export const QRCodeCreateManyScannable_documentInputEnvelopeObjectZodSchema = makeSchema();
