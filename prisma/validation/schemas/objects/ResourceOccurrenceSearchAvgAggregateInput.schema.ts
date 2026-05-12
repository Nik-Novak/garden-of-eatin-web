import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  radius_mi: z.literal(true).optional()
}).strict();
export const ResourceOccurrenceSearchAvgAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchAvgAggregateInputType>;
export const ResourceOccurrenceSearchAvgAggregateInputObjectZodSchema = makeSchema();
