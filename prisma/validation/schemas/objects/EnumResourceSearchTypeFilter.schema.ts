import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { NestedEnumResourceSearchTypeFilterObjectSchema as NestedEnumResourceSearchTypeFilterObjectSchema } from './NestedEnumResourceSearchTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ResourceSearchTypeSchema.optional(),
  in: ResourceSearchTypeSchema.array().optional(),
  notIn: ResourceSearchTypeSchema.array().optional(),
  not: z.union([ResourceSearchTypeSchema, z.lazy(() => NestedEnumResourceSearchTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumResourceSearchTypeFilterObjectSchema: z.ZodType<Prisma.EnumResourceSearchTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceSearchTypeFilter>;
export const EnumResourceSearchTypeFilterObjectZodSchema = makeSchema();
