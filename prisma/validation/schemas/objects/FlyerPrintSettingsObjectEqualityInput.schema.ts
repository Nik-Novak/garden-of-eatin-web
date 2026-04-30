import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean(),
  max_meal_radius_mi: z.number(),
  max_meals_per_day: z.number().int()
}).strict();
export const FlyerPrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsObjectEqualityInput>;
export const FlyerPrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
