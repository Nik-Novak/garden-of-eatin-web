import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementFindManySchema as DeviceAgreementFindManySchema } from '../findManyDeviceAgreement.schema';
import { AgreementCountOutputTypeArgsObjectSchema as AgreementCountOutputTypeArgsObjectSchema } from './AgreementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  agreement_type: z.boolean().optional(),
  effective_date: z.boolean().optional(),
  content_md: z.boolean().optional(),
  device_agreeents: z.union([z.boolean(), z.lazy(() => DeviceAgreementFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementSelectObjectSchema: z.ZodType<Prisma.AgreementSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementSelect>;
export const AgreementSelectObjectZodSchema = makeSchema();
