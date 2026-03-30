import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const ContributorAvgAggregateInputObjectSchema: z.ZodType<Prisma.ContributorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContributorAvgAggregateInputType>;
export const ContributorAvgAggregateInputObjectZodSchema = makeSchema();
