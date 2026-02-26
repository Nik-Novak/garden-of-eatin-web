import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { WeekdaySchema } from '../enums/Weekday.schema'

const makeSchema = () => z.object({
  set: WeekdaySchema.optional(),
  unset: z.boolean().optional()
}).strict();
export const NullableEnumWeekdayFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumWeekdayFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumWeekdayFieldUpdateOperationsInput>;
export const NullableEnumWeekdayFieldUpdateOperationsInputObjectZodSchema = makeSchema();
