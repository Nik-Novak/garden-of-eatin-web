import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { WeekdaySchema } from '../enums/Weekday.schema';
import { NullableEnumWeekdayFieldUpdateOperationsInputObjectSchema as NullableEnumWeekdayFieldUpdateOperationsInputObjectSchema } from './NullableEnumWeekdayFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ordinal: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  weekday: z.union([WeekdaySchema, z.lazy(() => NullableEnumWeekdayFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const RecurrenceRuleUpdateInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleUpdateInput>;
export const RecurrenceRuleUpdateInputObjectZodSchema = makeSchema();
