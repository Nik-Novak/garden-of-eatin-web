import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema as ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema } from './ScannableDocumentMealHitCreateManyScannable_documentInputEnvelope.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema).array(), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentMealHitCreateNestedManyWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateNestedManyWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateNestedManyWithoutScannable_documentInput>;
export const ScannableDocumentMealHitCreateNestedManyWithoutScannable_documentInputObjectZodSchema = makeSchema();
