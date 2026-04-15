import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const resourcesearchhitscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  search_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceSearchHitScalarWhereInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitScalarWhereInput> = resourcesearchhitscalarwhereinputSchema as unknown as z.ZodType<Prisma.ResourceSearchHitScalarWhereInput>;
export const ResourceSearchHitScalarWhereInputObjectZodSchema = resourcesearchhitscalarwhereinputSchema;
