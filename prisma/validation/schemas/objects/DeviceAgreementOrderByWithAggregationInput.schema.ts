import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceAgreementCountOrderByAggregateInputObjectSchema as DeviceAgreementCountOrderByAggregateInputObjectSchema } from './DeviceAgreementCountOrderByAggregateInput.schema';
import { DeviceAgreementMaxOrderByAggregateInputObjectSchema as DeviceAgreementMaxOrderByAggregateInputObjectSchema } from './DeviceAgreementMaxOrderByAggregateInput.schema';
import { DeviceAgreementMinOrderByAggregateInputObjectSchema as DeviceAgreementMinOrderByAggregateInputObjectSchema } from './DeviceAgreementMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  agreement_id: SortOrderSchema.optional(),
  opened: SortOrderSchema.optional(),
  accepted: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => DeviceAgreementCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DeviceAgreementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DeviceAgreementMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DeviceAgreementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DeviceAgreementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementOrderByWithAggregationInput>;
export const DeviceAgreementOrderByWithAggregationInputObjectZodSchema = makeSchema();
