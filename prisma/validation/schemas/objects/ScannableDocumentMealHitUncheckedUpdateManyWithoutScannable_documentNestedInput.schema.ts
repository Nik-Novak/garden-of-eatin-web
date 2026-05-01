import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema as ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema } from './ScannableDocumentMealHitCreateManyScannable_documentInputEnvelope.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInput.schema';
import { ScannableDocumentMealHitScalarWhereInputObjectSchema as ScannableDocumentMealHitScalarWhereInputObjectSchema } from './ScannableDocumentMealHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateWithoutScannable_documentInputObjectSchema).array(), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutScannable_documentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutScannable_documentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpsertWithWhereUniqueWithoutScannable_documentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentMealHitCreateManyScannable_documentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpdateWithWhereUniqueWithoutScannable_documentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpdateManyWithWhereWithoutScannable_documentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInput>;
export const ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInputObjectZodSchema = makeSchema();
