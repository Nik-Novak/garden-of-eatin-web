import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema'

const nestedenumresourcesearchtypefilterSchema = z.object({
  equals: ResourceSearchTypeSchema.optional(),
  in: ResourceSearchTypeSchema.array().optional(),
  notIn: ResourceSearchTypeSchema.array().optional(),
  not: z.union([ResourceSearchTypeSchema, z.lazy(() => NestedEnumResourceSearchTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumResourceSearchTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceSearchTypeFilter> = nestedenumresourcesearchtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceSearchTypeFilter>;
export const NestedEnumResourceSearchTypeFilterObjectZodSchema = nestedenumresourcesearchtypefilterSchema;
