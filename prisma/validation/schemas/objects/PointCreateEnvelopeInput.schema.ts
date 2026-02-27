import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PointCreateInputObjectSchema).optional()
}).strict();
export const PointCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.PointCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PointCreateEnvelopeInput>;
export const PointCreateEnvelopeInputObjectZodSchema = makeSchema();
