import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  day: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int()
}).strict();
export const OpportunityGroupedTimeRangeCreateInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeCreateInput>;
export const OpportunityGroupedTimeRangeCreateInputObjectZodSchema = makeSchema();
