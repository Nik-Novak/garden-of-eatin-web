import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimeSlotWhereInputObjectSchema as TimeSlotWhereInputObjectSchema } from './TimeSlotWhereInput.schema';
import { TimeSlotUpdateInputObjectSchema as TimeSlotUpdateInputObjectSchema } from './TimeSlotUpdateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TimeSlotWhereInputObjectSchema),
  data: z.lazy(() => TimeSlotUpdateInputObjectSchema)
}).strict();
export const TimeSlotUpdateManyInputObjectSchema: z.ZodType<Prisma.TimeSlotUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotUpdateManyInput>;
export const TimeSlotUpdateManyInputObjectZodSchema = makeSchema();
