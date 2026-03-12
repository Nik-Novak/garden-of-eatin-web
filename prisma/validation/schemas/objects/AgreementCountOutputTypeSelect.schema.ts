import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCountOutputTypeCountDeviceAgreeentsArgsObjectSchema as AgreementCountOutputTypeCountDeviceAgreeentsArgsObjectSchema } from './AgreementCountOutputTypeCountDeviceAgreeentsArgs.schema'

const makeSchema = () => z.object({
  device_agreeents: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeCountDeviceAgreeentsArgsObjectSchema)]).optional()
}).strict();
export const AgreementCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AgreementCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCountOutputTypeSelect>;
export const AgreementCountOutputTypeSelectObjectZodSchema = makeSchema();
