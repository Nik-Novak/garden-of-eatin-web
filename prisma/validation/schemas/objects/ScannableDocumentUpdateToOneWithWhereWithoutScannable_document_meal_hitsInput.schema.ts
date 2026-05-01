import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema';
import { ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUpdateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ScannableDocumentUpdateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema)])
}).strict();
export const ScannableDocumentUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateToOneWithWhereWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateToOneWithWhereWithoutScannable_document_meal_hitsInput>;
export const ScannableDocumentUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
