import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StatsCreateInputObjectSchema as StatsCreateInputObjectSchema } from './StatsCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => StatsCreateInputObjectSchema).optional()
}).strict();
export const StatsCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.StatsCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsCreateEnvelopeInput>;
export const StatsCreateEnvelopeInputObjectZodSchema = makeSchema();
