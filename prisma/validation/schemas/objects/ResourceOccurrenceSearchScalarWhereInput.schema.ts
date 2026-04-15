import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumResourceSearchTypeFilterObjectSchema as EnumResourceSearchTypeFilterObjectSchema } from './EnumResourceSearchTypeFilter.schema';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const resourceoccurrencesearchscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  search_type: z.union([z.lazy(() => EnumResourceSearchTypeFilterObjectSchema), ResourceSearchTypeSchema]).optional(),
  start: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  end: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceOccurrenceSearchScalarWhereInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchScalarWhereInput> = resourceoccurrencesearchscalarwhereinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchScalarWhereInput>;
export const ResourceOccurrenceSearchScalarWhereInputObjectZodSchema = resourceoccurrencesearchscalarwhereinputSchema;
