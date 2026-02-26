import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema'

const makeSchema = () => z.object({
  set: OpportunityStatusSchema.optional()
}).strict();
export const EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumOpportunityStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumOpportunityStatusFieldUpdateOperationsInput>;
export const EnumOpportunityStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
