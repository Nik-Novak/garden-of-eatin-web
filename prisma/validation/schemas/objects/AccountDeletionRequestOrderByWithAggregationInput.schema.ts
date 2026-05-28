import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountDeletionRequestCountOrderByAggregateInputObjectSchema as AccountDeletionRequestCountOrderByAggregateInputObjectSchema } from './AccountDeletionRequestCountOrderByAggregateInput.schema';
import { AccountDeletionRequestMaxOrderByAggregateInputObjectSchema as AccountDeletionRequestMaxOrderByAggregateInputObjectSchema } from './AccountDeletionRequestMaxOrderByAggregateInput.schema';
import { AccountDeletionRequestMinOrderByAggregateInputObjectSchema as AccountDeletionRequestMinOrderByAggregateInputObjectSchema } from './AccountDeletionRequestMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  feedback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountDeletionRequestCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountDeletionRequestMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountDeletionRequestMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountDeletionRequestOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestOrderByWithAggregationInput>;
export const AccountDeletionRequestOrderByWithAggregationInputObjectZodSchema = makeSchema();
