import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InviteCountOrderByAggregateInputObjectSchema as InviteCountOrderByAggregateInputObjectSchema } from './InviteCountOrderByAggregateInput.schema';
import { InviteMaxOrderByAggregateInputObjectSchema as InviteMaxOrderByAggregateInputObjectSchema } from './InviteMaxOrderByAggregateInput.schema';
import { InviteMinOrderByAggregateInputObjectSchema as InviteMinOrderByAggregateInputObjectSchema } from './InviteMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  inviter_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => InviteCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InviteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InviteMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InviteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InviteOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteOrderByWithAggregationInput>;
export const InviteOrderByWithAggregationInputObjectZodSchema = makeSchema();
