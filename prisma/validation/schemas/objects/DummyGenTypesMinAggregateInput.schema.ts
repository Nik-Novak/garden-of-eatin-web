import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DummyGenTypesMinAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesMinAggregateInputType>;
export const DummyGenTypesMinAggregateInputObjectZodSchema = makeSchema();
