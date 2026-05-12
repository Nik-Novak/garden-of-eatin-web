import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const resourceoccurrencescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  resource_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  start: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceOccurrenceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceScalarWhereWithAggregatesInput> = resourceoccurrencescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceScalarWhereWithAggregatesInput>;
export const ResourceOccurrenceScalarWhereWithAggregatesInputObjectZodSchema = resourceoccurrencescalarwherewithaggregatesinputSchema;
