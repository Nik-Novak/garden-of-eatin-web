import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './QRCodeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => QRCodeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => QRCodeWhereInputObjectSchema).optional()
}).strict();
export const QRCodeScalarRelationFilterObjectSchema: z.ZodType<Prisma.QRCodeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeScalarRelationFilter>;
export const QRCodeScalarRelationFilterObjectZodSchema = makeSchema();
