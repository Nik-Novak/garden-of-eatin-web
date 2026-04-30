import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCountOutputTypeCountQrScansArgsObjectSchema as QRCodeCountOutputTypeCountQrScansArgsObjectSchema } from './QRCodeCountOutputTypeCountQrScansArgs.schema'

const makeSchema = () => z.object({
  qr_scans: z.union([z.boolean(), z.lazy(() => QRCodeCountOutputTypeCountQrScansArgsObjectSchema)]).optional()
}).strict();
export const QRCodeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.QRCodeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeCountOutputTypeSelect>;
export const QRCodeCountOutputTypeSelectObjectZodSchema = makeSchema();
