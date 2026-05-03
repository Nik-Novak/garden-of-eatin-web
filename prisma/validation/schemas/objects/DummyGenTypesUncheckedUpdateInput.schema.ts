import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema as QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema } from './QRActionUrlRedirectPayloadUpdateEnvelopeInput.schema';
import { QRActionUrlRedirectPayloadCreateInputObjectSchema as QRActionUrlRedirectPayloadCreateInputObjectSchema } from './QRActionUrlRedirectPayloadCreateInput.schema'

const makeSchema = () => z.object({
  qrarp: z.union([z.lazy(() => QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadCreateInputObjectSchema)]).optional()
}).strict();
export const DummyGenTypesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesUncheckedUpdateInput>;
export const DummyGenTypesUncheckedUpdateInputObjectZodSchema = makeSchema();
