import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadCreateEnvelopeInputObjectSchema as QRActionUrlRedirectPayloadCreateEnvelopeInputObjectSchema } from './QRActionUrlRedirectPayloadCreateEnvelopeInput.schema';
import { QRActionUrlRedirectPayloadCreateInputObjectSchema as QRActionUrlRedirectPayloadCreateInputObjectSchema } from './QRActionUrlRedirectPayloadCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  qrarp: z.union([z.lazy(() => QRActionUrlRedirectPayloadCreateEnvelopeInputObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadCreateInputObjectSchema)])
}).strict();
export const DummyGenTypesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesUncheckedCreateInput>;
export const DummyGenTypesUncheckedCreateInputObjectZodSchema = makeSchema();
