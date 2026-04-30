import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentArgsObjectSchema as ScannableDocumentArgsObjectSchema } from './ScannableDocumentArgs.schema';
import { QRScanFindManySchema as QRScanFindManySchema } from '../findManyQRScan.schema';
import { QRCodeCountOutputTypeArgsObjectSchema as QRCodeCountOutputTypeArgsObjectSchema } from './QRCodeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  scannable_document: z.union([z.boolean(), z.lazy(() => ScannableDocumentArgsObjectSchema)]).optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => QRScanFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => QRCodeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const QRCodeIncludeObjectSchema: z.ZodType<Prisma.QRCodeInclude> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeInclude>;
export const QRCodeIncludeObjectZodSchema = makeSchema();
