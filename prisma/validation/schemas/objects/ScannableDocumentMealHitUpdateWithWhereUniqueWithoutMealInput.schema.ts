import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema as ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUpdateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentMealHitUpdateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateWithoutMealInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInput>;
export const ScannableDocumentMealHitUpdateWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
