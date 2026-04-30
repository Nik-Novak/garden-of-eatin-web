import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentScalarWhereInputObjectSchema as ScannableDocumentScalarWhereInputObjectSchema } from './ScannableDocumentScalarWhereInput.schema';
import { ScannableDocumentUpdateManyMutationInputObjectSchema as ScannableDocumentUpdateManyMutationInputObjectSchema } from './ScannableDocumentUpdateManyMutationInput.schema';
import { ScannableDocumentUncheckedUpdateManyWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedUpdateManyWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedUpdateManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentUpdateManyMutationInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedUpdateManyWithoutSubmitterInputObjectSchema)])
}).strict();
export const ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUpdateManyWithWhereWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUpdateManyWithWhereWithoutSubmitterInput>;
export const ScannableDocumentUpdateManyWithWhereWithoutSubmitterInputObjectZodSchema = makeSchema();
