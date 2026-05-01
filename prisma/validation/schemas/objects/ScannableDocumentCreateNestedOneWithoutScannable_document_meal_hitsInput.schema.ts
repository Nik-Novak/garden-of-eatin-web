import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema as ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema } from './ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInput.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ScannableDocumentCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).optional()
}).strict();
export const ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInput>;
export const ScannableDocumentCreateNestedOneWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
