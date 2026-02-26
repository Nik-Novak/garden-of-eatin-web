import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { PointUpdateInputObjectSchema as PointUpdateInputObjectSchema } from './PointUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PointCreateInputObjectSchema).optional(),
  update: z.lazy(() => PointUpdateInputObjectSchema).optional()
}).strict();
export const PointUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.PointUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PointUpdateEnvelopeInput>;
export const PointUpdateEnvelopeInputObjectZodSchema = makeSchema();
