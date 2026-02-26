import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
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
export const ContactRequestCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactRequestCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCountOrderByAggregateInput>;
export const ContactRequestCountOrderByAggregateInputObjectZodSchema = makeSchema();
