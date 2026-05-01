import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentMealHitCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema as ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateWithoutMealInput.schema';
import { ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema as ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema } from './ScannableDocumentMealHitCreateOrConnectWithoutMealInput.schema';
import { ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema as ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema } from './ScannableDocumentMealHitCreateManyMealInputEnvelope.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './ScannableDocumentMealHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateWithoutMealInputObjectSchema).array(), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => ScannableDocumentMealHitCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScannableDocumentMealHitCreateManyMealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema), z.lazy(() => ScannableDocumentMealHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ScannableDocumentMealHitUncheckedCreateNestedManyWithoutMealInputObjectSchema: z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateNestedManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitUncheckedCreateNestedManyWithoutMealInput>;
export const ScannableDocumentMealHitUncheckedCreateNestedManyWithoutMealInputObjectZodSchema = makeSchema();
