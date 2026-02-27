import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  inviter_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  inviter: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InviteOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InviteOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteOrderByWithRelationInput>;
export const InviteOrderByWithRelationInputObjectZodSchema = makeSchema();
