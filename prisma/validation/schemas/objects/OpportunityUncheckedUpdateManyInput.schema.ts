import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OpportunityStatusSchema } from '../enums/OpportunityStatus.schema';
import { EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema as EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema } from './EnumOpportunityStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  abstract: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([OpportunityStatusSchema, z.lazy(() => EnumOpportunityStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const OpportunityUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.OpportunityUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUncheckedUpdateManyInput>;
export const OpportunityUncheckedUpdateManyInputObjectZodSchema = makeSchema();
