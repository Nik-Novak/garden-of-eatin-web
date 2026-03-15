import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MealOrderByWithRelationInputObjectSchema as MealOrderByWithRelationInputObjectSchema } from './MealOrderByWithRelationInput.schema';
import { MealOccurrenceSearchOrderByWithRelationInputObjectSchema as MealOccurrenceSearchOrderByWithRelationInputObjectSchema } from './MealOccurrenceSearchOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  meal_id: SortOrderSchema.optional(),
  search_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  meal: z.lazy(() => MealOrderByWithRelationInputObjectSchema).optional(),
  search: z.lazy(() => MealOccurrenceSearchOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MealSearchHitOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MealSearchHitOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitOrderByWithRelationInput>;
export const MealSearchHitOrderByWithRelationInputObjectZodSchema = makeSchema();
