import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema as EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema } from './EnumOpportunityApplicationStatusFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema as OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema } from './OpportunityGroupedTimeRangeListUpdateEnvelopeInput.schema';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OpportunityUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema as OpportunityUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema } from './OpportunityUpdateOneRequiredWithoutApplicationsNestedInput.schema'

const makeSchema = () => z.object({
  status: z.union([OpportunityApplicationStatusSchema, z.lazy(() => EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_first_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_last_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  opportunity: z.lazy(() => OpportunityUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema).optional()
}).strict();
export const OpportunityApplicationUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateWithoutUserInput>;
export const OpportunityApplicationUpdateWithoutUserInputObjectZodSchema = makeSchema();
