import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInteractionTypeFilterObjectSchema as EnumInteractionTypeFilterObjectSchema } from './EnumInteractionTypeFilter.schema';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mealinteractionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealInteractionScalarWhereInputObjectSchema), z.lazy(() => MealInteractionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealInteractionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealInteractionScalarWhereInputObjectSchema), z.lazy(() => MealInteractionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  interaction_type: z.union([z.lazy(() => EnumInteractionTypeFilterObjectSchema), InteractionTypeSchema]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealInteractionScalarWhereInputObjectSchema: z.ZodType<Prisma.MealInteractionScalarWhereInput> = mealinteractionscalarwhereinputSchema as unknown as z.ZodType<Prisma.MealInteractionScalarWhereInput>;
export const MealInteractionScalarWhereInputObjectZodSchema = mealinteractionscalarwhereinputSchema;
