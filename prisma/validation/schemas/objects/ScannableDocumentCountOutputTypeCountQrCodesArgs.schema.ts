import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentCountOutputTypeCountQrCodesArgsObjectSchema = makeSchema();
export const ScannableDocumentCountOutputTypeCountQrCodesArgsObjectZodSchema = makeSchema();
