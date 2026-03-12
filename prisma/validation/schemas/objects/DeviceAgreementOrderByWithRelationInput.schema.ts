import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './DeviceOrderByWithRelationInput.schema';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './AgreementOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  agreement_id: SortOrderSchema.optional(),
  opened: SortOrderSchema.optional(),
  accepted: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  device: z.lazy(() => DeviceOrderByWithRelationInputObjectSchema).optional(),
  agreement: z.lazy(() => AgreementOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DeviceAgreementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DeviceAgreementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementOrderByWithRelationInput>;
export const DeviceAgreementOrderByWithRelationInputObjectZodSchema = makeSchema();
