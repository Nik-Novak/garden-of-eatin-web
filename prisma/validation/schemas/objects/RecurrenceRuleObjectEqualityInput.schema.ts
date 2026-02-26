import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { WeekdaySchema } from '../enums/Weekday.schema'

const makeSchema = () => z.object({
  ordinal: z.number().int().optional().nullable(),
  weekday: WeekdaySchema.optional().nullable(),
  date: z.date().optional().nullable()
}).strict();
export const RecurrenceRuleObjectEqualityInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleObjectEqualityInput>;
export const RecurrenceRuleObjectEqualityInputObjectZodSchema = makeSchema();
