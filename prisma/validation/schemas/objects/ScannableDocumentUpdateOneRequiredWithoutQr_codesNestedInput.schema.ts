import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentCreateWithoutQr_codesInputObjectSchema as ScannableDocumentCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutQr_codesInput.schema';
import { ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema as ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema } from './ScannableDocumentCreateOrConnectWithoutQr_codesInput.schema';
import { ScannableDocumentUpsertWithoutQr_codesInputObjectSchema as ScannableDocumentUpsertWithoutQr_codesInputObjectSchema } from './ScannableDocumentUpsertWithoutQr_codesInput.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInputObjectSchema as ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInputObjectSchema } from './ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInput.schema';
import { ScannableDocumentUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUpdateWithoutQr_codesInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutQr_codesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ScannableDocumentCreateOrConnectWithoutQr_codesInputObjectSchema).optional(),
  upsert: z.lazy(() => ScannableDocumentUpsertWithoutQr_codesInputObjectSchema).optional(),
  connect: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ScannableDocumentUpdateToOneWithWhereWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUpdateWithoutQr_codesInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutQr_codesInputObjectSchema)]).optional()
}).strict();
export const ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInput>;
export const ScannableDocumentUpdateOneRequiredWithoutQr_codesNestedInputObjectZodSchema = makeSchema();
