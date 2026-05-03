import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  url: z.string()
}).strict();
export const QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadObjectEqualityInput>;
export const QRActionUrlRedirectPayloadObjectEqualityInputObjectZodSchema = makeSchema();
