import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  client_log: SortOrderSchema.optional(),
  server_log: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const BugMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BugMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BugMinOrderByAggregateInput>;
export const BugMinOrderByAggregateInputObjectZodSchema = makeSchema();
