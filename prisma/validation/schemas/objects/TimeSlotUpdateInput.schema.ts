import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  start: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TimeSlotUpdateInputObjectSchema: z.ZodType<Prisma.TimeSlotUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotUpdateInput>;
export const TimeSlotUpdateInputObjectZodSchema = makeSchema();
