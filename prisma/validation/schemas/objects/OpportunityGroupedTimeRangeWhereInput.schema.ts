import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const opportunitygroupedtimerangewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema), z.lazy(() => OpportunityGroupedTimeRangeWhereInputObjectSchema).array()]).optional(),
  day: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  start: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  end: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const OpportunityGroupedTimeRangeWhereInputObjectSchema: z.ZodType<Prisma.OpportunityGroupedTimeRangeWhereInput> = opportunitygroupedtimerangewhereinputSchema as unknown as z.ZodType<Prisma.OpportunityGroupedTimeRangeWhereInput>;
export const OpportunityGroupedTimeRangeWhereInputObjectZodSchema = opportunitygroupedtimerangewhereinputSchema;
