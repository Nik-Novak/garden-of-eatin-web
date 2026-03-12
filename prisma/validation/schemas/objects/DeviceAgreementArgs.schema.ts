import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementSelectObjectSchema as DeviceAgreementSelectObjectSchema } from './DeviceAgreementSelect.schema';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './DeviceAgreementInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DeviceAgreementSelectObjectSchema).optional(),
  include: z.lazy(() => DeviceAgreementIncludeObjectSchema).optional()
}).strict();
export const DeviceAgreementArgsObjectSchema = makeSchema();
export const DeviceAgreementArgsObjectZodSchema = makeSchema();
