import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanCreateManyQr_codeInputObjectSchema as QRScanCreateManyQr_codeInputObjectSchema } from './QRScanCreateManyQr_codeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QRScanCreateManyQr_codeInputObjectSchema), z.lazy(() => QRScanCreateManyQr_codeInputObjectSchema).array()])
}).strict();
export const QRScanCreateManyQr_codeInputEnvelopeObjectSchema: z.ZodType<Prisma.QRScanCreateManyQr_codeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCreateManyQr_codeInputEnvelope>;
export const QRScanCreateManyQr_codeInputEnvelopeObjectZodSchema = makeSchema();
