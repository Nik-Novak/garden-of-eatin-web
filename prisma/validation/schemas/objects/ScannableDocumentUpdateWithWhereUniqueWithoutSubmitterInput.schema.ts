import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentUpdateWithoutSubmitterInputObjectSchema as ScannableDocumentUpdateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUpdateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedUpdateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInput>;
export const ScannableDocumentUpdateWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
