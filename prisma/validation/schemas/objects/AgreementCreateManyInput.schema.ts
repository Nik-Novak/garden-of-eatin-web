import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  agreement_type: AgreementTypeSchema,
  effective_date: z.coerce.date(),
  content_md: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const AgreementCreateManyInputObjectSchema: z.ZodType<Prisma.AgreementCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateManyInput>;
export const AgreementCreateManyInputObjectZodSchema = makeSchema();
