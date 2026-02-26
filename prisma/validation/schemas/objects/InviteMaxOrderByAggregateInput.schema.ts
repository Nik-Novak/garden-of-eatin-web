import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  inviter_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const InviteMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InviteMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteMaxOrderByAggregateInput>;
export const InviteMaxOrderByAggregateInputObjectZodSchema = makeSchema();
