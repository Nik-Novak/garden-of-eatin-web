import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mealsearchhitscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealSearchHitScalarWhereInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealSearchHitScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealSearchHitScalarWhereInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  search_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealSearchHitScalarWhereInputObjectSchema: z.ZodType<Prisma.MealSearchHitScalarWhereInput> = mealsearchhitscalarwhereinputSchema as unknown as z.ZodType<Prisma.MealSearchHitScalarWhereInput>;
export const MealSearchHitScalarWhereInputObjectZodSchema = mealsearchhitscalarwhereinputSchema;
