import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)])
}).strict();
export const ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInput>;
export const ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
