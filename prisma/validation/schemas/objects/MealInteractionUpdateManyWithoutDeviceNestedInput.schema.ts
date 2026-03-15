import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateWithoutDeviceInputObjectSchema as MealInteractionCreateWithoutDeviceInputObjectSchema } from './MealInteractionCreateWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateWithoutDeviceInput.schema';
import { MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema as MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema } from './MealInteractionCreateOrConnectWithoutDeviceInput.schema';
import { MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './MealInteractionUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { MealInteractionCreateManyDeviceInputEnvelopeObjectSchema as MealInteractionCreateManyDeviceInputEnvelopeObjectSchema } from './MealInteractionCreateManyDeviceInputEnvelope.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './MealInteractionUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema as MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './MealInteractionUpdateManyWithWhereWithoutDeviceInput.schema';
import { MealInteractionScalarWhereInputObjectSchema as MealInteractionScalarWhereInputObjectSchema } from './MealInteractionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealInteractionCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealInteractionScalarWhereInputObjectSchema), z.lazy(() => MealInteractionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealInteractionUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateManyWithoutDeviceNestedInput>;
export const MealInteractionUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
