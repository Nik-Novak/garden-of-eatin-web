import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const ContributorSumAggregateInputObjectSchema: z.ZodType<Prisma.ContributorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContributorSumAggregateInputType>;
export const ContributorSumAggregateInputObjectZodSchema = makeSchema();
