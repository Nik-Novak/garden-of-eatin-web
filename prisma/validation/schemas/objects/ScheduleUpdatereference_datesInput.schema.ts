import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  push: z.union([z.coerce.date(), z.union([z.date().array(), z.string().datetime().array()])]).optional()
}).strict();
export const ScheduleUpdatereference_datesInputObjectSchema: z.ZodType<Prisma.ScheduleUpdatereference_datesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleUpdatereference_datesInput>;
export const ScheduleUpdatereference_datesInputObjectZodSchema = makeSchema();
