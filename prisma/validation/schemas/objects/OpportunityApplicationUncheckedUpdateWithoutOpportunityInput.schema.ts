import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OpportunityApplicationStatusSchema } from '../enums/OpportunityApplicationStatus.schema';
import { EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema as EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema } from './EnumOpportunityApplicationStatusFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema as OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema } from './OpportunityGroupedTimeRangeListUpdateEnvelopeInput.schema';
import { OpportunityGroupedTimeRangeCreateInputObjectSchema as OpportunityGroupedTimeRangeCreateInputObjectSchema } from './OpportunityGroupedTimeRangeCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  user_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OpportunityApplicationStatusSchema, z.lazy(() => EnumOpportunityApplicationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_first_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_last_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  applicant_availability: z.union([z.lazy(() => OpportunityGroupedTimeRangeListUpdateEnvelopeInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeCreateInputObjectSchema).array()]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUncheckedUpdateWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUncheckedUpdateWithoutOpportunityInput>;
export const OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectZodSchema = makeSchema();
