import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TimeSlotOrderByCompositeAggregateInputObjectSchema: z.ZodType<Prisma.TimeSlotOrderByCompositeAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotOrderByCompositeAggregateInput>;
export const TimeSlotOrderByCompositeAggregateInputObjectZodSchema = makeSchema();
