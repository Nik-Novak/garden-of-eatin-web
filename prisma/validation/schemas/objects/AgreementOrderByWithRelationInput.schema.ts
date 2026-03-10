import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  agreement_type: SortOrderSchema.optional(),
  effective_date: SortOrderSchema.optional(),
  content_md: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const AgreementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgreementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementOrderByWithRelationInput>;
export const AgreementOrderByWithRelationInputObjectZodSchema = makeSchema();
