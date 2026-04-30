import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateManyWeb_deviceInputObjectSchema as QRScanCreateManyWeb_deviceInputObjectSchema } from './QRScanCreateManyWeb_deviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QRScanCreateManyWeb_deviceInputObjectSchema), z.lazy(() => QRScanCreateManyWeb_deviceInputObjectSchema).array()])
}).strict();
export const QRScanCreateManyWeb_deviceInputEnvelopeObjectSchema: z.ZodType<Prisma.QRScanCreateManyWeb_deviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateManyWeb_deviceInputEnvelope>;
export const QRScanCreateManyWeb_deviceInputEnvelopeObjectZodSchema = makeSchema();
