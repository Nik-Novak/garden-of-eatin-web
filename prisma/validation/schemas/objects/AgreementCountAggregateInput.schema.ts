import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  agreement_type: z.literal(true).optional(),
  effective_date: z.literal(true).optional(),
  content_md: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AgreementCountAggregateInputObjectSchema: z.ZodType<Prisma.AgreementCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCountAggregateInputType>;
export const AgreementCountAggregateInputObjectZodSchema = makeSchema();
