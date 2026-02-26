import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  overall: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const ReviewMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinAggregateInputType>;
export const ReviewMinAggregateInputObjectZodSchema = makeSchema();
