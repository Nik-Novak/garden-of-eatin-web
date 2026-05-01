import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitCreateOrConnectWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitCreateOrConnectWithoutMealInput>;
export const ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectZodSchema = makeSchema();
