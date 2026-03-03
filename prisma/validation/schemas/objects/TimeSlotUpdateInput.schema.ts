import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema';
import { EnumTimeAnchorFieldUpdateOperationsInputObjectSchema as EnumTimeAnchorFieldUpdateOperationsInputObjectSchema } from './EnumTimeAnchorFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  start: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  start_anchor: z.union([TimeAnchorSchema, z.lazy(() => EnumTimeAnchorFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  end_anchor: z.union([TimeAnchorSchema, z.lazy(() => EnumTimeAnchorFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TimeSlotUpdateInputObjectSchema: z.ZodType<Prisma.TimeSlotUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotUpdateInput>;
export const TimeSlotUpdateInputObjectZodSchema = makeSchema();
