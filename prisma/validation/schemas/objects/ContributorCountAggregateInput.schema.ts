import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  defaultImage: z.literal(true).optional(),
  hoverImage: z.literal(true).optional(),
  order: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ContributorCountAggregateInputObjectSchema: z.ZodType<Prisma.ContributorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContributorCountAggregateInputType>;
export const ContributorCountAggregateInputObjectZodSchema = makeSchema();
