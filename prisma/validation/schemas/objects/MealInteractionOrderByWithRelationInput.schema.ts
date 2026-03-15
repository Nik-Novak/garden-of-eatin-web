import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './MealOrderByWithRelationInput.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  meal: z.lazy(() => MealOrderByWithRelationInputObjectSchema).optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MealInteractionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealInteractionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionOrderByWithRelationInput>;
export const MealInteractionOrderByWithRelationInputObjectZodSchema = makeSchema();
