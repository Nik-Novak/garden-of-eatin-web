import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema'

const makeSchema = () => z.object({
  set: OpportunityApplicationStatusSchema.optional()
}).strict();
export const EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumOpportunityApplicationStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityApplicationStatusFieldUpdateOperationsInput>;
export const EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
