import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema'

const nestedenumresourcetypefilterSchema = z.object({
  equals: ResourceTypeSchema.optional(),
  in: ResourceTypeSchema.array().optional(),
  notIn: ResourceTypeSchema.array().optional(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumResourceTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceTypeFilter> = nestedenumresourcetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceTypeFilter>;
export const NestedEnumResourceTypeFilterObjectZodSchema = nestedenumresourcetypefilterSchema;
