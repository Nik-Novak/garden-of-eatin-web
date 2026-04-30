import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WebDeviceCountOrderByAggregateInputObjectSchema as WebDeviceCountOrderByAggregateInputObjectSchema } from './WebDeviceCountOrderByAggregateInput.schema';
import { WebDeviceMaxOrderByAggregateInputObjectSchema as WebDeviceMaxOrderByAggregateInputObjectSchema } from './WebDeviceMaxOrderByAggregateInput.schema';
import { WebDeviceMinOrderByAggregateInputObjectSchema as WebDeviceMinOrderByAggregateInputObjectSchema } from './WebDeviceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => WebDeviceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WebDeviceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WebDeviceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WebDeviceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WebDeviceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceOrderByWithAggregationInput>;
export const WebDeviceOrderByWithAggregationInputObjectZodSchema = makeSchema();
