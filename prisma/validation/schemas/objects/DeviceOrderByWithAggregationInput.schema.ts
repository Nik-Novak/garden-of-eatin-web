import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceCountOrderByAggregateInputObjectSchema as DeviceCountOrderByAggregateInputObjectSchema } from './DeviceCountOrderByAggregateInput.schema';
import { DeviceMaxOrderByAggregateInputObjectSchema as DeviceMaxOrderByAggregateInputObjectSchema } from './DeviceMaxOrderByAggregateInput.schema';
import { DeviceMinOrderByAggregateInputObjectSchema as DeviceMinOrderByAggregateInputObjectSchema } from './DeviceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => DeviceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DeviceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DeviceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DeviceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DeviceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceOrderByWithAggregationInput>;
export const DeviceOrderByWithAggregationInputObjectZodSchema = makeSchema();
