import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  overall: SortOrderSchema.optional()
}).strict();
export const ReviewAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewAvgOrderByAggregateInput>;
export const ReviewAvgOrderByAggregateInputObjectZodSchema = makeSchema();
