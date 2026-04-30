import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeSelectObjectSchema as QRCodeSelectObjectSchema } from './QRCodeSelect.schema';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './QRCodeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QRCodeSelectObjectSchema).optional(),
  include: z.lazy(() => QRCodeIncludeObjectSchema).optional()
}).strict();
export const QRCodeArgsObjectSchema = makeSchema();
export const QRCodeArgsObjectZodSchema = makeSchema();
