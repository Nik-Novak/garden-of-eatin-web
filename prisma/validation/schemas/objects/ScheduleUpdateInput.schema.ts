import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema';
import { EnumScheduleTypeFieldUpdateOperationsInputObjectSchema as EnumScheduleTypeFieldUpdateOperationsInputObjectSchema } from './EnumScheduleTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ScheduleUpdatereference_datesInputObjectSchema as ScheduleUpdatereference_datesInputObjectSchema } from './ScheduleUpdatereference_datesInput.schema';
import { TimeSlotListUpdateEnvelopeInputObjectSchema as TimeSlotListUpdateEnvelopeInputObjectSchema } from './TimeSlotListUpdateEnvelopeInput.schema';
import { TimeSlotCreateInputObjectSchema as TimeSlotCreateInputObjectSchema } from './TimeSlotCreateInput.schema';
import { RecurrenceRuleListUpdateEnvelopeInputObjectSchema as RecurrenceRuleListUpdateEnvelopeInputObjectSchema } from './RecurrenceRuleListUpdateEnvelopeInput.schema';
import { RecurrenceRuleCreateInputObjectSchema as RecurrenceRuleCreateInputObjectSchema } from './RecurrenceRuleCreateInput.schema'

const makeSchema = () => z.object({
  type: z.union([ScheduleTypeSchema, z.lazy(() => EnumScheduleTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  every: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  start_date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  end_date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  reference_dates: z.union([z.lazy(() => ScheduleUpdatereference_datesInputObjectSchema), z.union([z.date().array(), z.string().datetime().array()])]).optional(),
  times: z.union([z.lazy(() => TimeSlotListUpdateEnvelopeInputObjectSchema), z.lazy(() => TimeSlotCreateInputObjectSchema), z.lazy(() => TimeSlotCreateInputObjectSchema).array()]).optional(),
  recurrence_rules: z.union([z.lazy(() => RecurrenceRuleListUpdateEnvelopeInputObjectSchema), z.lazy(() => RecurrenceRuleCreateInputObjectSchema), z.lazy(() => RecurrenceRuleCreateInputObjectSchema).array()]).optional()
}).strict();
export const ScheduleUpdateInputObjectSchema: z.ZodType<Prisma.ScheduleUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleUpdateInput>;
export const ScheduleUpdateInputObjectZodSchema = makeSchema();
