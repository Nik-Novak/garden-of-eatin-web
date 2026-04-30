import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dark_mode: SortOrderSchema.optional(),
  max_meal_radius_mi: SortOrderSchema.optional(),
  max_meals_per_day: SortOrderSchema.optional()
}).strict();
export const FlyerPrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsOrderByInput>;
export const FlyerPrintSettingsOrderByInputObjectZodSchema = makeSchema();
