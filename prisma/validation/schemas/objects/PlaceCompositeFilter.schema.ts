import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlaceObjectEqualityInputObjectSchema as PlaceObjectEqualityInputObjectSchema } from './PlaceObjectEqualityInput.schema';
import { PlaceWhereInputObjectSchema as PlaceWhereInputObjectSchema } from './PlaceWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => PlaceObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => PlaceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PlaceWhereInputObjectSchema).optional()
}).strict();
export const PlaceCompositeFilterObjectSchema: z.ZodType<Prisma.PlaceCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.PlaceCompositeFilter>;
export const PlaceCompositeFilterObjectZodSchema = makeSchema();
