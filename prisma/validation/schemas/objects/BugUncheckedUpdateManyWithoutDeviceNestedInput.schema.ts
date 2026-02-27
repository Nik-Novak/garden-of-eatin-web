import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BugCreateWithoutDeviceInputObjectSchema as BugCreateWithoutDeviceInputObjectSchema } from './BugCreateWithoutDeviceInput.schema';
import { BugUncheckedCreateWithoutDeviceInputObjectSchema as BugUncheckedCreateWithoutDeviceInputObjectSchema } from './BugUncheckedCreateWithoutDeviceInput.schema';
import { BugCreateOrConnectWithoutDeviceInputObjectSchema as BugCreateOrConnectWithoutDeviceInputObjectSchema } from './BugCreateOrConnectWithoutDeviceInput.schema';
import { BugUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as BugUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './BugUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { BugCreateManyDeviceInputEnvelopeObjectSchema as BugCreateManyDeviceInputEnvelopeObjectSchema } from './BugCreateManyDeviceInputEnvelope.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './BugWhereUniqueInput.schema';
import { BugUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as BugUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './BugUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { BugUpdateManyWithWhereWithoutDeviceInputObjectSchema as BugUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './BugUpdateManyWithWhereWithoutDeviceInput.schema';
import { BugScalarWhereInputObjectSchema as BugScalarWhereInputObjectSchema } from './BugScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BugCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BugCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => BugCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BugUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => BugUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BugCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BugWhereUniqueInputObjectSchema), z.lazy(() => BugWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BugWhereUniqueInputObjectSchema), z.lazy(() => BugWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BugWhereUniqueInputObjectSchema), z.lazy(() => BugWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BugWhereUniqueInputObjectSchema), z.lazy(() => BugWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BugUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => BugUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BugUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => BugUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BugScalarWhereInputObjectSchema), z.lazy(() => BugScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BugUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.BugUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUncheckedUpdateManyWithoutDeviceNestedInput>;
export const BugUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
