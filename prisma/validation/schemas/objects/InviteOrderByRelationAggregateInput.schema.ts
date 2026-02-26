import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const InviteOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.InviteOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteOrderByRelationAggregateInput>;
export const InviteOrderByRelationAggregateInputObjectZodSchema = makeSchema();
