import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema'

const makeSchema = () => z.object({
  start: z.number().int(),
  start_anchor: TimeAnchorSchema,
  end: z.number().int(),
  end_anchor: TimeAnchorSchema
}).strict();
export const TimeSlotObjectEqualityInputObjectSchema: z.ZodType<Prisma.TimeSlotObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotObjectEqualityInput>;
export const TimeSlotObjectEqualityInputObjectZodSchema = makeSchema();
