import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema as QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema } from './QRActionUrlRedirectPayloadUpdateEnvelopeInput.schema';
import { QRActionUrlRedirectPayloadCreateInputObjectSchema as QRActionUrlRedirectPayloadCreateInputObjectSchema } from './QRActionUrlRedirectPayloadCreateInput.schema'

const makeSchema = () => z.object({
  qrarp: z.union([z.lazy(() => QRActionUrlRedirectPayloadUpdateEnvelopeInputObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadCreateInputObjectSchema)]).optional()
}).strict();
export const DummyGenTypesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.DummyGenTypesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesUncheckedUpdateManyInput>;
export const DummyGenTypesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
