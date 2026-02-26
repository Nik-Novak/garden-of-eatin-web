import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  address: z.string(),
  location: z.lazy(() => PointCreateInputObjectSchema)
}).strict();
export const PlaceCreateInputObjectSchema: z.ZodType<Prisma.PlaceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlaceCreateInput>;
export const PlaceCreateInputObjectZodSchema = makeSchema();
