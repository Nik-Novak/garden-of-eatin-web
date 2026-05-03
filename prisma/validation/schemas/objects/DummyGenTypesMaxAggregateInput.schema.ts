import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DummyGenTypesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DummyGenTypesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesMaxAggregateInputType>;
export const DummyGenTypesMaxAggregateInputObjectZodSchema = makeSchema();
