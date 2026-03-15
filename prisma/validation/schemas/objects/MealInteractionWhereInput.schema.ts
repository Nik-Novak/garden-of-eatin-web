import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInteractionTypeFilterObjectSchema as EnumInteractionTypeFilterObjectSchema } from './EnumInteractionTypeFilter.schema';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MealScalarRelationFilterObjectSchema as MealScalarRelationFilterObjectSchema } from './MealScalarRelationFilter.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const mealinteractionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealInteractionWhereInputObjectSchema), z.lazy(() => MealInteractionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealInteractionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealInteractionWhereInputObjectSchema), z.lazy(() => MealInteractionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  interaction_type: z.union([z.lazy(() => EnumInteractionTypeFilterObjectSchema), InteractionTypeSchema]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  user_location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  meal: z.union([z.lazy(() => MealScalarRelationFilterObjectSchema), z.lazy(() => MealWhereInputObjectSchema)]).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const MealInteractionWhereInputObjectSchema: z.ZodType<Prisma.MealInteractionWhereInput> = mealinteractionwhereinputSchema as unknown as z.ZodType<Prisma.MealInteractionWhereInput>;
export const MealInteractionWhereInputObjectZodSchema = mealinteractionwhereinputSchema;
