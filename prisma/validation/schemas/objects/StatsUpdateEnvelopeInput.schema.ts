import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StatsCreateInputObjectSchema as StatsCreateInputObjectSchema } from './StatsCreateInput.schema';
import { StatsUpdateInputObjectSchema as StatsUpdateInputObjectSchema } from './StatsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => StatsCreateInputObjectSchema).optional(),
  update: z.lazy(() => StatsUpdateInputObjectSchema).optional()
}).strict();
export const StatsUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.StatsUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsUpdateEnvelopeInput>;
export const StatsUpdateEnvelopeInputObjectZodSchema = makeSchema();
