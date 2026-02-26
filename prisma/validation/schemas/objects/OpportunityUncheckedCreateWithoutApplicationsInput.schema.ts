import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  abstract: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  status: OpportunityStatusSchema.optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityUncheckedCreateWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUncheckedCreateWithoutApplicationsInput>;
export const OpportunityUncheckedCreateWithoutApplicationsInputObjectZodSchema = makeSchema();
