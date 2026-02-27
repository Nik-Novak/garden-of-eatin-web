import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const ContactRequestMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactRequestMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestMinOrderByAggregateInput>;
export const ContactRequestMinOrderByAggregateInputObjectZodSchema = makeSchema();
