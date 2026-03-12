import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './DeviceAgreementWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountDeviceAgreementsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountDeviceAgreementsArgsObjectZodSchema = makeSchema();
