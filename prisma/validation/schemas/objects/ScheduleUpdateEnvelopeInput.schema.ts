import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema';
import { ScheduleUpdateInputObjectSchema as ScheduleUpdateInputObjectSchema } from './ScheduleUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => ScheduleCreateInputObjectSchema).optional(),
  update: z.lazy(() => ScheduleUpdateInputObjectSchema).optional()
}).strict();
export const ScheduleUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.ScheduleUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleUpdateEnvelopeInput>;
export const ScheduleUpdateEnvelopeInputObjectZodSchema = makeSchema();
