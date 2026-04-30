import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionCreateInputObjectSchema as QRActionCreateInputObjectSchema } from './QRActionCreateInput.schema';
import { QRActionUpdateInputObjectSchema as QRActionUpdateInputObjectSchema } from './QRActionUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => QRActionCreateInputObjectSchema).optional(),
  update: z.lazy(() => QRActionUpdateInputObjectSchema).optional()
}).strict();
export const QRActionUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.QRActionUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUpdateEnvelopeInput>;
export const QRActionUpdateEnvelopeInputObjectZodSchema = makeSchema();
