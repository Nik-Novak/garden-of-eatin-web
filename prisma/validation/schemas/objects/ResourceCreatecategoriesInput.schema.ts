import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryCategorySchema } from '../enums/InventoryCategory.schema'

const makeSchema = () => z.object({
  set: InventoryCategorySchema.array()
}).strict();
export const ResourceCreatecategoriesInputObjectSchema: z.ZodType<Prisma.ResourceCreatecategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatecategoriesInput>;
export const ResourceCreatecategoriesInputObjectZodSchema = makeSchema();
