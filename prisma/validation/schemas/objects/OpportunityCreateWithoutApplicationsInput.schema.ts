import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
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
export const OpportunityCreateWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityCreateWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCreateWithoutApplicationsInput>;
export const OpportunityCreateWithoutApplicationsInputObjectZodSchema = makeSchema();
