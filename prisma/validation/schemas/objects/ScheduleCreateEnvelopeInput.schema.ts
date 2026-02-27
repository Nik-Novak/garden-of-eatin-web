import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => ScheduleCreateInputObjectSchema).optional()
}).strict();
export const ScheduleCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.ScheduleCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleCreateEnvelopeInput>;
export const ScheduleCreateEnvelopeInputObjectZodSchema = makeSchema();
