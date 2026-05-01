import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitScalarWhereInputObjectSchema as ScannableDocumentMealHitScalarWhereInputObjectSchema } from './ScannableDocumentMealHitScalarWhereInput.schema';
import { ScannableDocumentMealHitUpdateManyMutationInputObjectSchema as ScannableDocumentMealHitUpdateManyMutationInputObjectSchema } from './ScannableDocumentMealHitUpdateManyMutationInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateManyWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateManyWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ScannableDocumentMealHitUpdateManyMutationInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedUpdateManyWithoutMealInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInput>;
export const ScannableDocumentMealHitUpdateManyWithWhereWithoutMealInputObjectZodSchema = makeSchema();
