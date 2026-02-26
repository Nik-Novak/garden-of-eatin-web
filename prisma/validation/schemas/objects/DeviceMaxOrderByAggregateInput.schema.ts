import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const DeviceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeviceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMaxOrderByAggregateInput>;
export const DeviceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
