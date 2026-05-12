import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryCategorySchema } from '../enums/InventoryCategory.schema'

const makeSchema = () => z.object({
  set: InventoryCategorySchema.array().optional(),
  push: z.union([InventoryCategorySchema, InventoryCategorySchema.array()]).optional()
}).strict();
export const ResourceUpdatecategoriesInputObjectSchema: z.ZodType<Prisma.ResourceUpdatecategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatecategoriesInput>;
export const ResourceUpdatecategoriesInputObjectZodSchema = makeSchema();
