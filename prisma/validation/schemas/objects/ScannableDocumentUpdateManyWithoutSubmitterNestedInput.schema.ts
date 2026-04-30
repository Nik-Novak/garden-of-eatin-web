import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateWithoutSubmitterInputObjectSchema as ScannableDocumentCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutSubmitterInput.schema';
import { ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema as ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateOrConnectWithoutSubmitterInput.schema';
import { ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema as ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema } from './ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInput.schema';
import { ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema as ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema } from './ScannableDocumentCreateManySubmitterInputEnvelope.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema as ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema } from './ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInput.schema';
import { ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectSchema as ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectSchema } from './ScannableDocumentUpdateManyWithWhereWithoutSubmitterInput.schema';
import { ScannableDocumentScalarWhereInputObjectSchema as ScannableDocumentScalarWhereInputObjectSchema } from './ScannableDocumentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema), z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentUpdateManyWithoutSubmitterNestedInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateManyWithoutSubmitterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateManyWithoutSubmitterNestedInput>;
export const ScannableDocumentUpdateManyWithoutSubmitterNestedInputObjectZodSchema = makeSchema();
