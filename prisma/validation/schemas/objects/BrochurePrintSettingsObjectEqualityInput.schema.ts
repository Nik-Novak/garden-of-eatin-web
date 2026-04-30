import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  max_meal_radius_mi: z.number(),
  max_meals_per_day: z.number().int()
}).strict();
export const BrochurePrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsObjectEqualityInput>;
export const BrochurePrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
