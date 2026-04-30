import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateWithoutSubmitterInputObjectSchema as ScannableDocumentCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutSubmitterInput.schema';
import { ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema as ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateOrConnectWithoutSubmitterInput.schema';
import { ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema as ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema } from './ScannableDocumentCreateManySubmitterInputEnvelope.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInput>;
export const ScannableDocumentUncheckedCreateNestedManyWithoutSubmitterInputObjectZodSchema = makeSchema();
