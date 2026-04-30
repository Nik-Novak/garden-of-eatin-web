import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QRCodeWhereInputObjectSchema).optional(),
  some: z.lazy(() => QRCodeWhereInputObjectSchema).optional(),
  none: z.lazy(() => QRCodeWhereInputObjectSchema).optional()
}).strict();
export const QRCodeListRelationFilterObjectSchema: z.ZodType<Prisma.QRCodeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeListRelationFilter>;
export const QRCodeListRelationFilterObjectZodSchema = makeSchema();
