import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryTagSchema } from '../enums/DietaryTag.schema'

const makeSchema = () => z.object({
  equals: DietaryTagSchema.array().optional().nullable(),
  has: DietaryTagSchema.optional().nullable(),
  hasEvery: DietaryTagSchema.array().optional(),
  hasSome: DietaryTagSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumDietaryTagNullableListFilterObjectSchema: z.ZodType<Prisma.EnumDietaryTagNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDietaryTagNullableListFilter>;
export const EnumDietaryTagNullableListFilterObjectZodSchema = makeSchema();
