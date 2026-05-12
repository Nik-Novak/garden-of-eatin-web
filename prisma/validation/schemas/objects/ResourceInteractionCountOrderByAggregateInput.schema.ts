import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ResourceInteractionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceInteractionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCountOrderByAggregateInput>;
export const ResourceInteractionCountOrderByAggregateInputObjectZodSchema = makeSchema();
