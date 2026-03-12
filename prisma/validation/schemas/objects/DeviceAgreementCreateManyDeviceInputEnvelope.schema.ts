import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateManyDeviceInputObjectSchema as DeviceAgreementCreateManyDeviceInputObjectSchema } from './DeviceAgreementCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DeviceAgreementCreateManyDeviceInputObjectSchema), z.lazy(() => DeviceAgreementCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateManyDeviceInputEnvelope>;
export const DeviceAgreementCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
