import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const QRActionUrlRedirectPayloadUpdateInputObjectSchema: z.ZodType<Prisma.QRActionUrlRedirectPayloadUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUrlRedirectPayloadUpdateInput>;
export const QRActionUrlRedirectPayloadUpdateInputObjectZodSchema = makeSchema();
