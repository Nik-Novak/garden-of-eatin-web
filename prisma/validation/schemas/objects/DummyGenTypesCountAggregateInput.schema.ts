import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DummyGenTypesCountAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesCountAggregateInputType>;
export const DummyGenTypesCountAggregateInputObjectZodSchema = makeSchema();
