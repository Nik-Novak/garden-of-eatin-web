import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const qractionurlredirectpayloadwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema).array()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const QRActionUrlRedirectPayloadWhereInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadWhereInput> = qractionurlredirectpayloadwhereinputSchema as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadWhereInput>;
export const QRActionUrlRedirectPayloadWhereInputObjectZodSchema = qractionurlredirectpayloadwhereinputSchema;
