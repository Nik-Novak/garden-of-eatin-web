import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  start: z.number().int(),
  end: z.number().int()
}).strict();
export const TimeSlotObjectEqualityInputObjectSchema: z.ZodType<Prisma.TimeSlotObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotObjectEqualityInput>;
export const TimeSlotObjectEqualityInputObjectZodSchema = makeSchema();
