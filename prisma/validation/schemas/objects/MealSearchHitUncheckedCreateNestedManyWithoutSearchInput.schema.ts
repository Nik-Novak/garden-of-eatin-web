import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateWithoutSearchInputObjectSchema as MealSearchHitCreateWithoutSearchInputObjectSchema } from './MealSearchHitCreateWithoutSearchInput.schema';
import { MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutSearchInput.schema';
import { MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema as MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema } from './MealSearchHitCreateOrConnectWithoutSearchInput.schema';
import { MealSearchHitCreateManySearchInputEnvelopeObjectSchema as MealSearchHitCreateManySearchInputEnvelopeObjectSchema } from './MealSearchHitCreateManySearchInputEnvelope.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema).array(), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealSearchHitCreateManySearchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUncheckedCreateNestedManyWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUncheckedCreateNestedManyWithoutSearchInput>;
export const MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectZodSchema = makeSchema();
