import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadCreateInputObjectSchema as QRActionUrlRedirectPayloadCreateInputObjectSchema } from './QRActionUrlRedirectPayloadCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRActionUrlRedirectPayloadCreateInputObjectSchema).optional()
}).strict();
export const QRActionUrlRedirectPayloadCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadCreateEnvelopeInput>;
export const QRActionUrlRedirectPayloadCreateEnvelopeInputObjectZodSchema = makeSchema();
