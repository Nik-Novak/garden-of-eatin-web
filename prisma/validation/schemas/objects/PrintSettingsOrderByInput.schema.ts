import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dark_mode: SortOrderSchema.optional(),
  max_meal_radius_mi: SortOrderSchema.optional(),
  max_meals_per_day: SortOrderSchema.optional(),
  show_duplicate_days: SortOrderSchema.optional()
}).strict();
export const PrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.PrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsOrderByInput>;
export const PrintSettingsOrderByInputObjectZodSchema = makeSchema();
