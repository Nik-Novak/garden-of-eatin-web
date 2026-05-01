import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema as ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUpdateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateWithoutMealInput.schema';
import { ScannableDocumentMealHitCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema)]),
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInput>;
export const ScannableDocumentMealHitUpsertWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
