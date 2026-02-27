import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetTypeSchema } from '../enums/FacetType.schema'

const nestedenumfacettypefilterSchema = z.object({
  equals: FacetTypeSchema.optional(),
  in: FacetTypeSchema.array().optional(),
  notIn: FacetTypeSchema.array().optional(),
  not: z.union([FacetTypeSchema, z.lazy(() => NestedEnumFacetTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumFacetTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumFacetTypeFilter> = nestedenumfacettypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumFacetTypeFilter>;
export const NestedEnumFacetTypeFilterObjectZodSchema = nestedenumfacettypefilterSchema;
