import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema as EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema } from './EnumOpportunityStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OpportunityApplicationUpdateManyWithoutOpportunityNestedInputObjectSchema as OpportunityApplicationUpdateManyWithoutOpportunityNestedInputObjectSchema } from './OpportunityApplicationUpdateManyWithoutOpportunityNestedInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  abstract: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OpportunityStatusSchema, z.lazy(() => EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  applications: z.lazy(() => OpportunityApplicationUpdateManyWithoutOpportunityNestedInputObjectSchema).optional()
}).strict();
export const OpportunityUpdateInputObjectSchema: z.ZodType<Prisma.OpportunityUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUpdateInput>;
export const OpportunityUpdateInputObjectZodSchema = makeSchema();
