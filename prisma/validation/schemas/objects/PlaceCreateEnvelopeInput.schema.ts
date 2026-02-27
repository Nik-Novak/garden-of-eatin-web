import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PlaceCreateInputObjectSchema).optional()
}).strict();
export const PlaceCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.PlaceCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PlaceCreateEnvelopeInput>;
export const PlaceCreateEnvelopeInputObjectZodSchema = makeSchema();
