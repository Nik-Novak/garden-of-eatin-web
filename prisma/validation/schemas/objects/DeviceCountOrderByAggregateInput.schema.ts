import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const DeviceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeviceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCountOrderByAggregateInput>;
export const DeviceCountOrderByAggregateInputObjectZodSchema = makeSchema();
