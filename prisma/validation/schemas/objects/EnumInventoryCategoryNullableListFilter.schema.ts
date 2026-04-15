import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryCategorySchema } from '../enums/InventoryCategory.schema'

const makeSchema = () => z.object({
  equals: InventoryCategorySchema.array().optional().nullable(),
  has: InventoryCategorySchema.optional().nullable(),
  hasEvery: InventoryCategorySchema.array().optional(),
  hasSome: InventoryCategorySchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumInventoryCategoryNullableListFilterObjectSchema: z.ZodType<Prisma.EnumInventoryCategoryNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumInventoryCategoryNullableListFilter>;
export const EnumInventoryCategoryNullableListFilterObjectZodSchema = makeSchema();
