import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  feedback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AccountDeletionRequestOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestOrderByWithRelationInput>;
export const AccountDeletionRequestOrderByWithRelationInputObjectZodSchema = makeSchema();
