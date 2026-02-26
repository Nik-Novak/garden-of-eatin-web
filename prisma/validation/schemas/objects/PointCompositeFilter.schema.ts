import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { PointWhereInputObjectSchema as PointWhereInputObjectSchema } from './PointWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => PointObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => PointWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PointWhereInputObjectSchema).optional()
}).strict();
export const PointCompositeFilterObjectSchema: z.ZodType<Prisma.PointCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.PointCompositeFilter>;
export const PointCompositeFilterObjectZodSchema = makeSchema();
