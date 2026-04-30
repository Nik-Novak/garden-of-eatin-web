import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  max_meal_radius_mi: SortOrderSchema.optional(),
  max_meals_per_day: SortOrderSchema.optional()
}).strict();
export const BrochurePrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsOrderByInput>;
export const BrochurePrintSettingsOrderByInputObjectZodSchema = makeSchema();
