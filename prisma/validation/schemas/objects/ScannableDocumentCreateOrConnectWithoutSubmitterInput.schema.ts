import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentCreateWithoutSubmitterInputObjectSchema as ScannableDocumentCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentCreateWithoutSubmitterInput.schema';
import { ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema as ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema } from './ScannableDocumentUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScannableDocumentCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ScannableDocumentUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateOrConnectWithoutSubmitterInput>;
export const ScannableDocumentCreateOrConnectWithoutSubmitterInputObjectZodSchema = makeSchema();
