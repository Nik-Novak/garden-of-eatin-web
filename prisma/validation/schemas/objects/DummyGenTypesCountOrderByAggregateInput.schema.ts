import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DummyGenTypesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesCountOrderByAggregateInput>;
export const DummyGenTypesCountOrderByAggregateInputObjectZodSchema = makeSchema();
