import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const QRScanOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.QRScanOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanOrderByRelationAggregateInput>;
export const QRScanOrderByRelationAggregateInputObjectZodSchema = makeSchema();
