import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimeSlotWhereInputObjectSchema as TimeSlotWhereInputObjectSchema } from './TimeSlotWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TimeSlotWhereInputObjectSchema)
}).strict();
export const TimeSlotDeleteManyInputObjectSchema: z.ZodType<Prisma.TimeSlotDeleteManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotDeleteManyInput>;
export const TimeSlotDeleteManyInputObjectZodSchema = makeSchema();
