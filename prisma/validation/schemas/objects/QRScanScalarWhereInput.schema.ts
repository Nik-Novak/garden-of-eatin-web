import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const qrscanscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRScanScalarWhereInputObjectSchema), z.lazy(() => QRScanScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRScanScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRScanScalarWhereInputObjectSchema), z.lazy(() => QRScanScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  qr_code_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  web_device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QRScanScalarWhereInputObjectSchema: z.ZodType<Prisma.QRScanScalarWhereInput> = qrscanscalarwhereinputSchema as unknown as z.ZodType<Prisma.QRScanScalarWhereInput>;
export const QRScanScalarWhereInputObjectZodSchema = qrscanscalarwhereinputSchema;
