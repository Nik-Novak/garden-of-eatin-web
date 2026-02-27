import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  title: z.string(),
  abstract: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  status: OpportunityStatusSchema.optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const OpportunityCreateManyInputObjectSchema: z.ZodType<Prisma.OpportunityCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCreateManyInput>;
export const OpportunityCreateManyInputObjectZodSchema = makeSchema();
