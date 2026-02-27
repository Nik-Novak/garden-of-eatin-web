import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekdaySchema } from '../enums/Weekday.schema'

const makeSchema = () => z.object({
  ordinal: z.number().int().optional().nullable(),
  weekday: WeekdaySchema.optional().nullable(),
  date: z.coerce.date().optional().nullable()
}).strict();
export const RecurrenceRuleCreateInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleCreateInput>;
export const RecurrenceRuleCreateInputObjectZodSchema = makeSchema();
