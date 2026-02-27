import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BugCountOrderByAggregateInputObjectSchema as BugCountOrderByAggregateInputObjectSchema } from './BugCountOrderByAggregateInput.schema';
import { BugMaxOrderByAggregateInputObjectSchema as BugMaxOrderByAggregateInputObjectSchema } from './BugMaxOrderByAggregateInput.schema';
import { BugMinOrderByAggregateInputObjectSchema as BugMinOrderByAggregateInputObjectSchema } from './BugMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  client_log: SortOrderSchema.optional(),
  server_log: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => BugCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BugMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BugMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BugOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BugOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BugOrderByWithAggregationInput>;
export const BugOrderByWithAggregationInputObjectZodSchema = makeSchema();
