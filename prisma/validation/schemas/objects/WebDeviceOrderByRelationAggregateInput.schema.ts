import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WebDeviceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WebDeviceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceOrderByRelationAggregateInput>;
export const WebDeviceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
