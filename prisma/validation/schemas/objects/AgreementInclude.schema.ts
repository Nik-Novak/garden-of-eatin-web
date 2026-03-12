import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementFindManySchema as DeviceAgreementFindManySchema } from '../findManyDeviceAgreement.schema';
import { AgreementCountOutputTypeArgsObjectSchema as AgreementCountOutputTypeArgsObjectSchema } from './AgreementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  device_agreeents: z.union([z.boolean(), z.lazy(() => DeviceAgreementFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementIncludeObjectSchema: z.ZodType<Prisma.AgreementInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgreementInclude>;
export const AgreementIncludeObjectZodSchema = makeSchema();
