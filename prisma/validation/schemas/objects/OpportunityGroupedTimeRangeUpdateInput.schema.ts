import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  day: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  start: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const OpportunityGroupedTimeRangeUpdateInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeUpdateInput>;
export const OpportunityGroupedTimeRangeUpdateInputObjectZodSchema = makeSchema();
