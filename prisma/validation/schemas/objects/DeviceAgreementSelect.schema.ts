import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional(),
  agreement_id: z.boolean().optional(),
  opened: z.boolean().optional(),
  accepted: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const DeviceAgreementSelectObjectSchema: z.ZodType<Prisma.DeviceAgreementSelect> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementSelect>;
export const DeviceAgreementSelectObjectZodSchema = makeSchema();
