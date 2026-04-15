import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const resourceoccurrencescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceOccurrenceScalarWhereInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceScalarWhereInput> = resourceoccurrencescalarwhereinputSchema as unknown as z.ZodType<Prisma.ResourceOccurrenceScalarWhereInput>;
export const ResourceOccurrenceScalarWhereInputObjectZodSchema = resourceoccurrencescalarwhereinputSchema;
