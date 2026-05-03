import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema as QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema } from './QRActionUrlRedirectPayloadObjectEqualityInput.schema';
import { QRActionUrlRedirectPayloadWhereInputObjectSchema as QRActionUrlRedirectPayloadWhereInputObjectSchema } from './QRActionUrlRedirectPayloadWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => QRActionUrlRedirectPayloadWhereInputObjectSchema).optional()
}).strict();
export const QRActionUrlRedirectPayloadCompositeFilterObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadCompositeFilter>;
export const QRActionUrlRedirectPayloadCompositeFilterObjectZodSchema = makeSchema();
