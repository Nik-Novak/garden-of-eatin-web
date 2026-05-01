import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInput>;
export const ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectZodSchema = makeSchema();
