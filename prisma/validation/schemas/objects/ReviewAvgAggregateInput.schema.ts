import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  overall: z.literal(true).optional()
}).strict();
export const ReviewAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReviewAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewAvgAggregateInputType>;
export const ReviewAvgAggregateInputObjectZodSchema = makeSchema();
