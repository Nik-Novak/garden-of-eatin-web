import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const brochureprintsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema), z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema), z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema).array()]).optional(),
  max_meal_radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  max_meals_per_day: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BrochurePrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsWhereInput> = brochureprintsettingswhereinputSchema as unknown as z.ZodType<Prisma.BrochurePrintSettingsWhereInput>;
export const BrochurePrintSettingsWhereInputObjectZodSchema = brochureprintsettingswhereinputSchema;
