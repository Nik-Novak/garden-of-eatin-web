import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ContactRequestCountOrderByAggregateInputObjectSchema as ContactRequestCountOrderByAggregateInputObjectSchema } from './ContactRequestCountOrderByAggregateInput.schema';
import { ContactRequestMaxOrderByAggregateInputObjectSchema as ContactRequestMaxOrderByAggregateInputObjectSchema } from './ContactRequestMaxOrderByAggregateInput.schema';
import { ContactRequestMinOrderByAggregateInputObjectSchema as ContactRequestMinOrderByAggregateInputObjectSchema } from './ContactRequestMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ContactRequestCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContactRequestMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContactRequestMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContactRequestOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContactRequestOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestOrderByWithAggregationInput>;
export const ContactRequestOrderByWithAggregationInputObjectZodSchema = makeSchema();
