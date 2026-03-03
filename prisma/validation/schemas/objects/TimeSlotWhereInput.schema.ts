import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumTimeAnchorFilterObjectSchema as EnumTimeAnchorFilterObjectSchema } from './EnumTimeAnchorFilter.schema';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema'

const timeslotwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TimeSlotWhereInputObjectSchema), z.lazy(() => TimeSlotWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TimeSlotWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimeSlotWhereInputObjectSchema), z.lazy(() => TimeSlotWhereInputObjectSchema).array()]).optional(),
  start: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  start_anchor: z.union([z.lazy(() => EnumTimeAnchorFilterObjectSchema), TimeAnchorSchema]).optional(),
  end: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  end_anchor: z.union([z.lazy(() => EnumTimeAnchorFilterObjectSchema), TimeAnchorSchema]).optional()
}).strict();
export const TimeSlotWhereInputObjectSchema: z.ZodType<Prisma.TimeSlotWhereInput> = timeslotwhereinputSchema as unknown as z.ZodType<Prisma.TimeSlotWhereInput>;
export const TimeSlotWhereInputObjectZodSchema = timeslotwhereinputSchema;
