import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema'

const makeSchema = () => z.object({
  equals: ResourceTypeSchema.array().optional().nullable(),
  has: ResourceTypeSchema.optional().nullable(),
  hasEvery: ResourceTypeSchema.array().optional(),
  hasSome: ResourceTypeSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumResourceTypeNullableListFilterObjectSchema: z.ZodType<Prisma.EnumResourceTypeNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceTypeNullableListFilter>;
export const EnumResourceTypeNullableListFilterObjectZodSchema = makeSchema();
