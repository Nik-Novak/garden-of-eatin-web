import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUpdateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutQr_codesInput.schema';
import { ScannableDocumentCreateWithoutQr_codesInputObjectSchema as ScannableDocumentCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutQr_codesInput.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ScannableDocumentUpdateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema)]),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema)]),
  where: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentUpsertWithoutQr_codesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpsertWithoutQr_codesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpsertWithoutQr_codesInput>;
export const ScannableDocumentUpsertWithoutQr_codesInputObjectZodSchema = makeSchema();
