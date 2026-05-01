import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const printsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PrintSettingsWhereInputObjectSchema), z.lazy(() => PrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PrintSettingsWhereInputObjectSchema), z.lazy(() => PrintSettingsWhereInputObjectSchema).array()]).optional(),
  dark_mode: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  max_meal_radius_mi: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  max_meals_per_day: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  show_duplicate_days: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const PrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.PrintSettingsWhereInput> = printsettingswhereinputSchema as unknown as z.ZodType<Prisma.PrintSettingsWhereInput>;
export const PrintSettingsWhereInputObjectZodSchema = printsettingswhereinputSchema;
