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
export const ResourceInteractionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResourceInteractionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionMaxOrderByAggregateInput>;
export const ResourceInteractionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
