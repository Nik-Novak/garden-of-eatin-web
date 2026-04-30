import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeCountOutputTypeSelectObjectSchema as QRCodeCountOutputTypeSelectObjectSchema } from './QRCodeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QRCodeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const QRCodeCountOutputTypeArgsObjectSchema = makeSchema();
export const QRCodeCountOutputTypeArgsObjectZodSchema = makeSchema();
