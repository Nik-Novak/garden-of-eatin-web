import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema'

const makeSchema = () => z.object({
  address: z.string(),
  location: z.lazy(() => PointObjectEqualityInputObjectSchema)
}).strict();
export const PlaceObjectEqualityInputObjectSchema: z.ZodType<Prisma.PlaceObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.PlaceObjectEqualityInput>;
export const PlaceObjectEqualityInputObjectZodSchema = makeSchema();
