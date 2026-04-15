import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourcePackagingTypeSchema } from '../enums/ResourcePackagingType.schema'

const makeSchema = () => z.object({
  equals: ResourcePackagingTypeSchema.array().optional().nullable(),
  has: ResourcePackagingTypeSchema.optional().nullable(),
  hasEvery: ResourcePackagingTypeSchema.array().optional(),
  hasSome: ResourcePackagingTypeSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumResourcePackagingTypeNullableListFilterObjectSchema: z.ZodType<Prisma.EnumResourcePackagingTypeNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourcePackagingTypeNullableListFilter>;
export const EnumResourcePackagingTypeNullableListFilterObjectZodSchema = makeSchema();
