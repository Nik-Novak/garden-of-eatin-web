import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './QRScanWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QRScanWhereInputObjectSchema).optional(),
  some: z.lazy(() => QRScanWhereInputObjectSchema).optional(),
  none: z.lazy(() => QRScanWhereInputObjectSchema).optional()
}).strict();
export const QRScanListRelationFilterObjectSchema: z.ZodType<Prisma.QRScanListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRScanListRelationFilter>;
export const QRScanListRelationFilterObjectZodSchema = makeSchema();
