import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetTypeSchema } from '../enums/FacetType.schema';
import { NestedEnumFacetTypeFilterObjectSchema as NestedEnumFacetTypeFilterObjectSchema } from './NestedEnumFacetTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FacetTypeSchema.optional(),
  in: FacetTypeSchema.array().optional(),
  notIn: FacetTypeSchema.array().optional(),
  not: z.union([FacetTypeSchema, z.lazy(() => NestedEnumFacetTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumFacetTypeFilterObjectSchema: z.ZodType<Prisma.EnumFacetTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFacetTypeFilter>;
export const EnumFacetTypeFilterObjectZodSchema = makeSchema();
