import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema';
import { ScannableDocumentUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUpdateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutQr_codesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ScannableDocumentUpdateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema)])
}).strict();
export const ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInput>;
export const ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInputObjectZodSchema = makeSchema();
