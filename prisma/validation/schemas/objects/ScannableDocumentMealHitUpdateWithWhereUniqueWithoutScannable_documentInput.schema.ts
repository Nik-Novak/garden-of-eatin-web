import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUpdateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInput>;
export const ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectZodSchema = makeSchema();
