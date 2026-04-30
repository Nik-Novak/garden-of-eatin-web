import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const WebDeviceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WebDeviceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMinOrderByAggregateInput>;
export const WebDeviceMinOrderByAggregateInputObjectZodSchema = makeSchema();
