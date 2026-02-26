import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PlaceUpdateInputObjectSchema as PlaceUpdateInputObjectSchema } from './PlaceUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PlaceCreateInputObjectSchema).optional(),
  update: z.lazy(() => PlaceUpdateInputObjectSchema).optional()
}).strict();
export const PlaceUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.PlaceUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PlaceUpdateEnvelopeInput>;
export const PlaceUpdateEnvelopeInputObjectZodSchema = makeSchema();
