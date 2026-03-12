import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  agreement_id: SortOrderSchema.optional(),
  opened: SortOrderSchema.optional(),
  accepted: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const DeviceAgreementMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeviceAgreementMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementMinOrderByAggregateInput>;
export const DeviceAgreementMinOrderByAggregateInputObjectZodSchema = makeSchema();
