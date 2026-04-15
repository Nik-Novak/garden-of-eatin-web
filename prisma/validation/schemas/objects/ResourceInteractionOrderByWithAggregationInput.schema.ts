import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResourceInteractionCountOrderByAggregateInputObjectSchema as ResourceInteractionCountOrderByAggregateInputObjectSchema } from './ResourceInteractionCountOrderByAggregateInput.schema';
import { ResourceInteractionMaxOrderByAggregateInputObjectSchema as ResourceInteractionMaxOrderByAggregateInputObjectSchema } from './ResourceInteractionMaxOrderByAggregateInput.schema';
import { ResourceInteractionMinOrderByAggregateInputObjectSchema as ResourceInteractionMinOrderByAggregateInputObjectSchema } from './ResourceInteractionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  interaction_type: SortOrderSchema.optional(),
  resource_id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ResourceInteractionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResourceInteractionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResourceInteractionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResourceInteractionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResourceInteractionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionOrderByWithAggregationInput>;
export const ResourceInteractionOrderByWithAggregationInputObjectZodSchema = makeSchema();
