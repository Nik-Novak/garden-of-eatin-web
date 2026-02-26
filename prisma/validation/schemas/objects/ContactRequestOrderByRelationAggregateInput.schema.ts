import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ContactRequestOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ContactRequestOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestOrderByRelationAggregateInput>;
export const ContactRequestOrderByRelationAggregateInputObjectZodSchema = makeSchema();
