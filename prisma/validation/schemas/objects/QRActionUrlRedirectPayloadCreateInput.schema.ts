import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  url: z.string()
}).strict();
export const QRActionUrlRedirectPayloadCreateInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadCreateInput>;
export const QRActionUrlRedirectPayloadCreateInputObjectZodSchema = makeSchema();
