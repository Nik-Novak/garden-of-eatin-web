import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const timeslotwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TimeSlotWhereInputObjectSchema), z.lazy(() => TimeSlotWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TimeSlotWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimeSlotWhereInputObjectSchema), z.lazy(() => TimeSlotWhereInputObjectSchema).array()]).optional(),
  start: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  end: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TimeSlotWhereInputObjectSchema: z.ZodType<Prisma.TimeSlotWhereInput> = timeslotwhereinputSchema as unknown as z.ZodType<Prisma.TimeSlotWhereInput>;
export const TimeSlotWhereInputObjectZodSchema = timeslotwhereinputSchema;
