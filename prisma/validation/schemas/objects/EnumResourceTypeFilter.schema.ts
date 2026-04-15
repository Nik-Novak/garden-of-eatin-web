import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { NestedEnumResourceTypeFilterObjectSchema as NestedEnumResourceTypeFilterObjectSchema } from './NestedEnumResourceTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ResourceTypeSchema.optional(),
  in: ResourceTypeSchema.array().optional(),
  notIn: ResourceTypeSchema.array().optional(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumResourceTypeFilterObjectSchema: z.ZodType<Prisma.EnumResourceTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceTypeFilter>;
export const EnumResourceTypeFilterObjectZodSchema = makeSchema();
