import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const QRCodeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.QRCodeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeOrderByRelationAggregateInput>;
export const QRCodeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
