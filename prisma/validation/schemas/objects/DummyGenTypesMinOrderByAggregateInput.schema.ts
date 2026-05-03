import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DummyGenTypesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesMinOrderByAggregateInput>;
export const DummyGenTypesMinOrderByAggregateInputObjectZodSchema = makeSchema();
