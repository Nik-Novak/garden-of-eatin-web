import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema'

const makeSchema = () => z.object({
  start: z.number().int(),
  start_anchor: TimeAnchorSchema.optional(),
  end: z.number().int(),
  end_anchor: TimeAnchorSchema.optional()
}).strict();
export const TimeSlotCreateInputObjectSchema: z.ZodType<Prisma.TimeSlotCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotCreateInput>;
export const TimeSlotCreateInputObjectZodSchema = makeSchema();
