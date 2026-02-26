import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  start: z.number().int(),
  end: z.number().int()
}).strict();
export const TimeSlotCreateInputObjectSchema: z.ZodType<Prisma.TimeSlotCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotCreateInput>;
export const TimeSlotCreateInputObjectZodSchema = makeSchema();
