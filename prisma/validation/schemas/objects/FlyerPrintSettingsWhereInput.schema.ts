import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const flyerprintsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema), z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema), z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema).array()]).optional(),
  dark_mode: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  max_meal_radius_mi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  max_meals_per_day: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const FlyerPrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsWhereInput> = flyerprintsettingswhereinputSchema as unknown as z.ZodType<Prisma.FlyerPrintSettingsWhereInput>;
export const FlyerPrintSettingsWhereInputObjectZodSchema = flyerprintsettingswhereinputSchema;
