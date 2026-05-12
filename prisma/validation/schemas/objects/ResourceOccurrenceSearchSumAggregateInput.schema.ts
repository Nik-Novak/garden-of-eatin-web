import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  radius_mi: z.literal(true).optional()
}).strict();
export const ResourceOccurrenceSearchSumAggregateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchSumAggregateInputType>;
export const ResourceOccurrenceSearchSumAggregateInputObjectZodSchema = makeSchema();
