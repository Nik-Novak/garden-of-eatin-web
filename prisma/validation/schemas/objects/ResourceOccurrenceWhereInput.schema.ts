import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { ResourceScalarRelationFilterObjectSchema as ResourceScalarRelationFilterObjectSchema } from './ResourceScalarRelationFilter.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const resourceoccurrencewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resource: z.union([z.lazy(() => ResourceScalarRelationFilterObjectSchema), z.lazy(() => ResourceWhereInputObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceWhereInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceWhereInput> = resourceoccurrencewhereinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceWhereInput>;
export const ResourceOccurrenceWhereInputObjectZodSchema = resourceoccurrencewhereinputSchema;
