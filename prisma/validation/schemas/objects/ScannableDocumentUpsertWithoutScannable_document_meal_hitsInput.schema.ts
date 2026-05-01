import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUpdateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema)]),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)]),
  where: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional()
}).strict();
export const ScannableDocumentUpsertWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpsertWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpsertWithoutScannable_document_meal_hitsInput>;
export const ScannableDocumentUpsertWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
