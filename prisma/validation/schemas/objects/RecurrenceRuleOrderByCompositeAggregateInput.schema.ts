import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RecurrenceRuleOrderByCompositeAggregateInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleOrderByCompositeAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleOrderByCompositeAggregateInput>;
export const RecurrenceRuleOrderByCompositeAggregateInputObjectZodSchema = makeSchema();
