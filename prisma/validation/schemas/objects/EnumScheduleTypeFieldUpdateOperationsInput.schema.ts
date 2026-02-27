import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema'

const makeSchema = () => z.object({
  set: ScheduleTypeSchema.optional()
}).strict();
export const EnumScheduleTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumScheduleTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumScheduleTypeFieldUpdateOperationsInput>;
export const EnumScheduleTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
