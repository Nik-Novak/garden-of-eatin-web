import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  equals: FeatureSchema.array().optional().nullable(),
  has: FeatureSchema.optional().nullable(),
  hasEvery: FeatureSchema.array().optional(),
  hasSome: FeatureSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumFeatureNullableListFilterObjectSchema: z.ZodType<Prisma.EnumFeatureNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeatureNullableListFilter>;
export const EnumFeatureNullableListFilterObjectZodSchema = makeSchema();
