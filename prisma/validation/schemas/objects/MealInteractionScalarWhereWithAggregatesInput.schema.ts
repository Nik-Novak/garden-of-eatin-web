import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumInteractionTypeWithAggregatesFilterObjectSchema as EnumInteractionTypeWithAggregatesFilterObjectSchema } from './EnumInteractionTypeWithAggregatesFilter.schema';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mealinteractionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MealInteractionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealInteractionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealInteractionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealInteractionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealInteractionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  interaction_type: z.union([z.lazy(() => EnumInteractionTypeWithAggregatesFilterObjectSchema), InteractionTypeSchema]).optional(),
  meal_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MealInteractionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MealInteractionScalarWhereWithAggregatesInput> = mealinteractionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MealInteractionScalarWhereWithAggregatesInput>;
export const MealInteractionScalarWhereWithAggregatesInputObjectZodSchema = mealinteractionscalarwherewithaggregatesinputSchema;
