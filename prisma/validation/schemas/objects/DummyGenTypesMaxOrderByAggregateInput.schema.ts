import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DummyGenTypesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesMaxOrderByAggregateInput>;
export const DummyGenTypesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
