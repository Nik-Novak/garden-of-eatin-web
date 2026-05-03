import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadCreateInputObjectSchema as QRActionUrlRedirectPayloadCreateInputObjectSchema } from './QRActionUrlRedirectPayloadCreateInput.schema';
import { QRActionUrlRedirectPayloadUpdateInputObjectSchema as QRActionUrlRedirectPayloadUpdateInputObjectSchema } from './QRActionUrlRedirectPayloadUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRActionUrlRedirectPayloadCreateInputObjectSchema).optional(),
  update: z.lazy(() => QRActionUrlRedirectPayloadUpdateInputObjectSchema).optional()
}).strict();
export const QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadUpdateEnvelopeInput>;
export const QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectZodSchema = makeSchema();
