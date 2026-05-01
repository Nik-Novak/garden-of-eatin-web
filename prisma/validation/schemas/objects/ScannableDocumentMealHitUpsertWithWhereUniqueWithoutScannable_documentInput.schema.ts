import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUpdateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema)]),
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInput>;
export const ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectZodSchema = makeSchema();
