import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateOrConnectWithoutMealInput.schema';
import { ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectSchema as ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInput.schema';
import { ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema as ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema } from './ScannableDocumentMealHitCreateManyMealInputEnvelope.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectSchema as ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInput.schema';
import { ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectSchema as ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInput.schema';
import { ScannableDocumentMealHitScalarWhereInputObjectSchema as ScannableDocumentMealHitScalarWhereInputObjectSchema } from './ScannableDocumentMealHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema).array(), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentMealHitUncheckedUpdateManyWithoutMealNestedInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyWithoutMealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedUpdateManyWithoutMealNestedInput>;
export const ScannableDocumentMealHitUncheckedUpdateManyWithoutMealNestedInputObjectZodSchema = makeSchema();
