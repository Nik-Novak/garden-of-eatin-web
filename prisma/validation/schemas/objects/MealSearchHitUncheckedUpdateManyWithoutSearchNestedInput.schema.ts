import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateWithoutSearchInputObjectSchema as MealSearchHitCreateWithoutSearchInputObjectSchema } from './MealSearchHitCreateWithoutSearchInput.schema';
import { MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutSearchInput.schema';
import { MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema as MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema } from './MealSearchHitCreateOrConnectWithoutSearchInput.schema';
import { MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema as MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema } from './MealSearchHitUpsertWithWhereUniqueWithoutSearchInput.schema';
import { MealSearchHitCreateManySearchInputEnvelopeObjectSchema as MealSearchHitCreateManySearchInputEnvelopeObjectSchema } from './MealSearchHitCreateManySearchInputEnvelope.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema as MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema } from './MealSearchHitUpdateWithWhereUniqueWithoutSearchInput.schema';
import { MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema as MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema } from './MealSearchHitUpdateManyWithWhereWithoutSearchInput.schema';
import { MealSearchHitScalarWhereInputObjectSchema as MealSearchHitScalarWhereInputObjectSchema } from './MealSearchHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema).array(), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealSearchHitCreateManySearchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema), z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealSearchHitScalarWhereInputObjectSchema), z.lazy(() => MealSearchHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealSearchHitUncheckedUpdateManyWithoutSearchNestedInputObjectSchema: z.ZodType<Prisma.MealSearchHitUncheckedUpdateManyWithoutSearchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUncheckedUpdateManyWithoutSearchNestedInput>;
export const MealSearchHitUncheckedUpdateManyWithoutSearchNestedInputObjectZodSchema = makeSchema();
