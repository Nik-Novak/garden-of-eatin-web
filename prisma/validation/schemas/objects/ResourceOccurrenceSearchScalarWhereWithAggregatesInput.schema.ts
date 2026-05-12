import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumResourceSearchTypeWithAggregatesFilterObjectSchema as EnumResourceSearchTypeWithAggregatesFilterObjectSchema } from './EnumResourceSearchTypeWithAggregatesFilter.schema';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const resourceoccurrencesearchscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  search_type: z.union([z.lazy(() => EnumResourceSearchTypeWithAggregatesFilterObjectSchema), ResourceSearchTypeSchema]).optional(),
  start: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchScalarWhereWithAggregatesInput> = resourceoccurrencesearchscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchScalarWhereWithAggregatesInput>;
export const ResourceOccurrenceSearchScalarWhereWithAggregatesInputObjectZodSchema = resourceoccurrencesearchscalarwherewithaggregatesinputSchema;
