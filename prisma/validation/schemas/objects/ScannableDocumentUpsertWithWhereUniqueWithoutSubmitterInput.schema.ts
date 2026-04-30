import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentUpdateWithoutSubmitterInputObjectSchema as ScannableDocumentUpdateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUpdateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutSubmitterInput.schema';
import { ScannableDocumentCreateWithoutSubmitterInputObjectSchema as ScannableDocumentCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ScannableDocumentUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema)]),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInput>;
export const ScannableDocumentUpsertWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
