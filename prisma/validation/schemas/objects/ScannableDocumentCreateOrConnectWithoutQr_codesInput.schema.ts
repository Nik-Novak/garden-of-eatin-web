import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentCreateWithoutQr_codesInputObjectSchema as ScannableDocumentCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutQr_codesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema)])
}).strict();
export const ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutQr_codesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutQr_codesInput>;
export const ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectZodSchema = makeSchema();
