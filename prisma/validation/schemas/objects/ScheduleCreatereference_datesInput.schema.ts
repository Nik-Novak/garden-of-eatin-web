import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  set: z.union([z.date().array(), z.string().datetime().array()])
}).strict();
export const ScheduleCreatereference_datesInputObjectSchema: z.ZodType<Prisma.ScheduleCreatereference_datesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleCreatereference_datesInput>;
export const ScheduleCreatereference_datesInputObjectZodSchema = makeSchema();
