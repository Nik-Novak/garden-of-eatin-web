import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  agreement_type: z.boolean().optional(),
  effective_date: z.boolean().optional(),
  content_md: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const AgreementSelectObjectSchema: z.ZodType<Prisma.AgreementSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementSelect>;
export const AgreementSelectObjectZodSchema = makeSchema();
