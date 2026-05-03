import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  url: SortOrderSchema.optional()
}).strict();
export const QRActionUrlRedirectPayloadOrderByInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadOrderByInput>;
export const QRActionUrlRedirectPayloadOrderByInputObjectZodSchema = makeSchema();
