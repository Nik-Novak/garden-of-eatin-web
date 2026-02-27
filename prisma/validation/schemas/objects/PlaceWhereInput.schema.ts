import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema'

const placewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PlaceWhereInputObjectSchema), z.lazy(() => PlaceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlaceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlaceWhereInputObjectSchema), z.lazy(() => PlaceWhereInputObjectSchema).array()]).optional(),
  address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional()
}).strict();
export const PlaceWhereInputObjectSchema: z.ZodType<Prisma.PlaceWhereInput> = placewhereinputSchema as unknown as z.ZodType<Prisma.PlaceWhereInput>;
export const PlaceWhereInputObjectZodSchema = placewhereinputSchema;
