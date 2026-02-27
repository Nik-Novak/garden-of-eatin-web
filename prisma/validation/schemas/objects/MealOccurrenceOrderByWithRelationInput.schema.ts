import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './MealOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  location: z.lazy(() => PointOrderByInputObjectSchema).optional(),
  meal: z.lazy(() => MealOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MealOccurrenceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealOccurrenceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceOrderByWithRelationInput>;
export const MealOccurrenceOrderByWithRelationInputObjectZodSchema = makeSchema();
