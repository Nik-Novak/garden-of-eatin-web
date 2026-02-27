import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  day: z.date(),
  start: z.number().int(),
  end: z.number().int()
}).strict();
export const OpportunityGroupedTimeRangeObjectEqualityInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeObjectEqualityInput>;
export const OpportunityGroupedTimeRangeObjectEqualityInputObjectZodSchema = makeSchema();
