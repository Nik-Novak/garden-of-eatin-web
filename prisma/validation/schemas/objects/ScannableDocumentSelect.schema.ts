import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeFindManySchema as QRCodeFindManySchema } from '../findManyQRCode.schema';
import { ScannableDocumentMealHitFindManySchema as ScannableDocumentMealHitFindManySchema } from '../findManyScannableDocumentMealHit.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ScannableDocumentCountOutputTypeArgsObjectSchema as ScannableDocumentCountOutputTypeArgsObjectSchema } from './ScannableDocumentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  name: z.boolean().optional(),
  place: z.boolean().optional(),
  location: z.boolean().optional(),
  timezone: z.boolean().optional(),
  print_settings: z.boolean().optional(),
  qr_codes: z.union([z.boolean(), z.lazy(() => QRCodeFindManySchema)]).optional(),
  file_url: z.boolean().optional(),
  scannable_document_meal_hits: z.union([z.boolean(), z.lazy(() => ScannableDocumentMealHitFindManySchema)]).optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  submitter_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScannableDocumentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScannableDocumentSelectObjectSchema: z.ZodType<Prisma.ScannableDocumentSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentSelect>;
export const ScannableDocumentSelectObjectZodSchema = makeSchema();
