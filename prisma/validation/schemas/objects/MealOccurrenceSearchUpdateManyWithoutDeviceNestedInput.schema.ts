import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutDeviceInput.schema';
import { MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema as MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema } from './MealOccurrenceSearchCreateManyDeviceInputEnvelope.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema as MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput.schema';
import { MealOccurrenceSearchScalarWhereInputObjectSchema as MealOccurrenceSearchScalarWhereInputObjectSchema } from './MealOccurrenceSearchScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithoutDeviceNestedInput>;
export const MealOccurrenceSearchUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
