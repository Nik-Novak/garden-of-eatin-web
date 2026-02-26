import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BugOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BugOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BugOrderByRelationAggregateInput>;
export const BugOrderByRelationAggregateInputObjectZodSchema = makeSchema();
