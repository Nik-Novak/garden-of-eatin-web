import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './QRScanWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanWhereInputObjectSchema).optional()
}).strict();
export const QRCodeCountOutputTypeCountQrScansArgsObjectSchema = makeSchema();
export const QRCodeCountOutputTypeCountQrScansArgsObjectZodSchema = makeSchema();
