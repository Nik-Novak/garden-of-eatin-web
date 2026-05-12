import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumResourceSearchTypeFilterObjectSchema as EnumResourceSearchTypeFilterObjectSchema } from './EnumResourceSearchTypeFilter.schema';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ResourceSearchHitListRelationFilterObjectSchema as ResourceSearchHitListRelationFilterObjectSchema } from './ResourceSearchHitListRelationFilter.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const resourceoccurrencesearchwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  search_type: z.union([z.lazy(() => EnumResourceSearchTypeFilterObjectSchema), ResourceSearchTypeSchema]).optional(),
  start: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  user_location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  hits: z.lazy(() => ResourceSearchHitListRelationFilterObjectSchema).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceSearchWhereInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchWhereInput> = resourceoccurrencesearchwhereinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchWhereInput>;
export const ResourceOccurrenceSearchWhereInputObjectZodSchema = resourceoccurrencesearchwhereinputSchema;
