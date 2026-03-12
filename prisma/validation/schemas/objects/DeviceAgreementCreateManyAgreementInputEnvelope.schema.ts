import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateManyAgreementInputObjectSchema as DeviceAgreementCreateManyAgreementInputObjectSchema } from './DeviceAgreementCreateManyAgreementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DeviceAgreementCreateManyAgreementInputObjectSchema), z.lazy(() => DeviceAgreementCreateManyAgreementInputObjectSchema).array()])
}).strict();
export const DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateManyAgreementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateManyAgreementInputEnvelope>;
export const DeviceAgreementCreateManyAgreementInputEnvelopeObjectZodSchema = makeSchema();
