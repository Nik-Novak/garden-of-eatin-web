import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRActionCreateInputObjectSchema).optional()
}).strict();
export const QRActionCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.QRActionCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionCreateEnvelopeInput>;
export const QRActionCreateEnvelopeInputObjectZodSchema = makeSchema();
