import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  agreement_id: z.literal(true).optional(),
  opened: z.literal(true).optional(),
  accepted: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DeviceAgreementCountAggregateInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCountAggregateInputType>;
export const DeviceAgreementCountAggregateInputObjectZodSchema = makeSchema();
