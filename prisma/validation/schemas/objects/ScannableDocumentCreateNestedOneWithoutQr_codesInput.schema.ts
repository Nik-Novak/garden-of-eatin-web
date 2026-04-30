import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateWithoutQr_codesInputObjectSchema as ScannableDocumentCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutQr_codesInput.schema';
import { ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema as ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateOrConnectWithoutQr_codesInput.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema).optional(),
  connect: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).optional()
}).strict();
export const ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateNestedOneWithoutQr_codesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateNestedOneWithoutQr_codesInput>;
export const ScannableDocumentCreateNestedOneWithoutQr_codesInputObjectZodSchema = makeSchema();
