import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const qrcodescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRCodeScalarWhereInputObjectSchema), z.lazy(() => QRCodeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRCodeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRCodeScalarWhereInputObjectSchema), z.lazy(() => QRCodeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scannable_document_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QRCodeScalarWhereInputObjectSchema: z.ZodType<Prisma.QRCodeScalarWhereInput> = qrcodescalarwhereinputSchema as unknown as z.ZodType<Prisma.QRCodeScalarWhereInput>;
export const QRCodeScalarWhereInputObjectZodSchema = qrcodescalarwhereinputSchema;
