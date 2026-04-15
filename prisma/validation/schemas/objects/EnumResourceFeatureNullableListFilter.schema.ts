import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceFeatureSchema } from '../enums/ResourceFeature.schema'

const makeSchema = () => z.object({
  equals: ResourceFeatureSchema.array().optional().nullable(),
  has: ResourceFeatureSchema.optional().nullable(),
  hasEvery: ResourceFeatureSchema.array().optional(),
  hasSome: ResourceFeatureSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumResourceFeatureNullableListFilterObjectSchema: z.ZodType<Prisma.EnumResourceFeatureNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceFeatureNullableListFilter>;
export const EnumResourceFeatureNullableListFilterObjectZodSchema = makeSchema();
