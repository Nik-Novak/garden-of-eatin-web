import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean().optional().nullable(),
  max_meal_radius_mi: z.number().optional().nullable(),
  max_meals_per_day: z.number().int().optional().nullable(),
  show_duplicate_days: z.boolean().optional().nullable()
}).strict();
export const PrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.PrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsObjectEqualityInput>;
export const PrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
