import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanSelectObjectSchema as QRScanSelectObjectSchema } from './QRScanSelect.schema';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './QRScanInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QRScanSelectObjectSchema).optional(),
  include: z.lazy(() => QRScanIncludeObjectSchema).optional()
}).strict();
export const QRScanArgsObjectSchema = makeSchema();
export const QRScanArgsObjectZodSchema = makeSchema();
