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
export const WebDeviceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WebDeviceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCountOrderByAggregateInput>;
export const WebDeviceCountOrderByAggregateInputObjectZodSchema = makeSchema();
