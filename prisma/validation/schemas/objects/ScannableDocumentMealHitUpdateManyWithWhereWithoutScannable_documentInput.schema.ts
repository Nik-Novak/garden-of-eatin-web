import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitScalarWhereInputObjectSchema as ScannableDocumentMealHitScalarWhereInputObjectSchema } from './ScannableDocumentMealHitScalarWhereInput.schema';
import { ScannableDocumentMealHitUpdateManyMutationInputObjectSchema as ScannableDocumentMealHitUpdateManyMutationInputObjectSchema } from './ScannableDocumentMealHitUpdateManyMutationInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentMealHitUpdateManyMutationInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInput>;
export const ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectZodSchema = makeSchema();
