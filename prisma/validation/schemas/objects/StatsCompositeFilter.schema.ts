import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StatsObjectEqualityInputObjectSchema as StatsObjectEqualityInputObjectSchema } from './StatsObjectEqualityInput.schema';
import { StatsWhereInputObjectSchema as StatsWhereInputObjectSchema } from './StatsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => StatsObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => StatsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StatsWhereInputObjectSchema).optional()
}).strict();
export const StatsCompositeFilterObjectSchema: z.ZodType<Prisma.StatsCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.StatsCompositeFilter>;
export const StatsCompositeFilterObjectZodSchema = makeSchema();
