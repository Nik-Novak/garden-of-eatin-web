import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeFindManySchema as QRCodeFindManySchema } from '../findManyQRCode.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ScannableDocumentCountOutputTypeArgsObjectSchema as ScannableDocumentCountOutputTypeArgsObjectSchema } from './ScannableDocumentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  qr_codes: z.union([z.boolean(), z.lazy(() => QRCodeFindManySchema)]).optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScannableDocumentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScannableDocumentIncludeObjectSchema: z.ZodType<Prisma.ScannableDocumentInclude> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentInclude>;
export const ScannableDocumentIncludeObjectZodSchema = makeSchema();
