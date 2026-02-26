import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
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
export const ContactRequestMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactRequestMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestMaxOrderByAggregateInput>;
export const ContactRequestMaxOrderByAggregateInputObjectZodSchema = makeSchema();
