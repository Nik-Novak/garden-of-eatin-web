import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnumQRActionTypeFilterObjectSchema as EnumQRActionTypeFilterObjectSchema } from './EnumQRActionTypeFilter.schema';
import { QRActionTypeSchema } from '../enums/QRActionType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema'

const qractionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRActionWhereInputObjectSchema), z.lazy(() => QRActionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRActionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRActionWhereInputObjectSchema), z.lazy(() => QRActionWhereInputObjectSchema).array()]).optional(),
  type: z.union([z.lazy(() => EnumQRActionTypeFilterObjectSchema), QRActionTypeSchema]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  payload: z.lazy(() => JsonFilterObjectSchema).optional()
}).strict();
export const QRActionWhereInputObjectSchema: z.ZodType<Prisma.QRActionWhereInput> = qractionwhereinputSchema as unknown as z.ZodType<Prisma.QRActionWhereInput>;
export const QRActionWhereInputObjectZodSchema = qractionwhereinputSchema;
