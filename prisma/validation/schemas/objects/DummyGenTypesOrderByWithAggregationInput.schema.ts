import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DummyGenTypesCountOrderByAggregateInputObjectSchema as DummyGenTypesCountOrderByAggregateInputObjectSchema } from './DummyGenTypesCountOrderByAggregateInput.schema';
import { DummyGenTypesMaxOrderByAggregateInputObjectSchema as DummyGenTypesMaxOrderByAggregateInputObjectSchema } from './DummyGenTypesMaxOrderByAggregateInput.schema';
import { DummyGenTypesMinOrderByAggregateInputObjectSchema as DummyGenTypesMinOrderByAggregateInputObjectSchema } from './DummyGenTypesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  _count: z.lazy(() => DummyGenTypesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DummyGenTypesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DummyGenTypesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DummyGenTypesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DummyGenTypesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesOrderByWithAggregationInput>;
export const DummyGenTypesOrderByWithAggregationInputObjectZodSchema = makeSchema();
