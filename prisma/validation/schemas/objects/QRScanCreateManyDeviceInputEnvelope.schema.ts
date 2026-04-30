import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateManyDeviceInputObjectSchema as QRScanCreateManyDeviceInputObjectSchema } from './QRScanCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QRScanCreateManyDeviceInputObjectSchema), z.lazy(() => QRScanCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const QRScanCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.QRScanCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateManyDeviceInputEnvelope>;
export const QRScanCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
