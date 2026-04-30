import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentArgsObjectSchema as ScannableDocumentArgsObjectSchema } from './ScannableDocumentArgs.schema';
import { QRScanFindManySchema as QRScanFindManySchema } from '../findManyQRScan.schema';
import { QRCodeCountOutputTypeArgsObjectSchema as QRCodeCountOutputTypeArgsObjectSchema } from './QRCodeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  action: z.boolean().optional(),
  scannable_document: z.union([z.boolean(), z.lazy(() => ScannableDocumentArgsObjectSchema)]).optional(),
  scannable_document_id: z.boolean().optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => QRScanFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => QRCodeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const QRCodeSelectObjectSchema: z.ZodType<Prisma.QRCodeSelect> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeSelect>;
export const QRCodeSelectObjectZodSchema = makeSchema();
