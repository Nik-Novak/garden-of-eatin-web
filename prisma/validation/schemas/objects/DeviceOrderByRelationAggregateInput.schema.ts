import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DeviceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DeviceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceOrderByRelationAggregateInput>;
export const DeviceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
