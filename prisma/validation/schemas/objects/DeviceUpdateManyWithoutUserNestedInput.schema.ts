import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutUserInputObjectSchema as DeviceCreateWithoutUserInputObjectSchema } from './DeviceCreateWithoutUserInput.schema';
import { DeviceUncheckedCreateWithoutUserInputObjectSchema as DeviceUncheckedCreateWithoutUserInputObjectSchema } from './DeviceUncheckedCreateWithoutUserInput.schema';
import { DeviceCreateOrConnectWithoutUserInputObjectSchema as DeviceCreateOrConnectWithoutUserInputObjectSchema } from './DeviceCreateOrConnectWithoutUserInput.schema';
import { DeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema as DeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DeviceUpsertWithWhereUniqueWithoutUserInput.schema';
import { DeviceCreateManyUserInputEnvelopeObjectSchema as DeviceCreateManyUserInputEnvelopeObjectSchema } from './DeviceCreateManyUserInputEnvelope.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema as DeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DeviceUpdateWithWhereUniqueWithoutUserInput.schema';
import { DeviceUpdateManyWithWhereWithoutUserInputObjectSchema as DeviceUpdateManyWithWhereWithoutUserInputObjectSchema } from './DeviceUpdateManyWithWhereWithoutUserInput.schema';
import { DeviceScalarWhereInputObjectSchema as DeviceScalarWhereInputObjectSchema } from './DeviceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DeviceWhereUniqueInputObjectSchema), z.lazy(() => DeviceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DeviceWhereUniqueInputObjectSchema), z.lazy(() => DeviceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DeviceWhereUniqueInputObjectSchema), z.lazy(() => DeviceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DeviceWhereUniqueInputObjectSchema), z.lazy(() => DeviceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DeviceUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => DeviceUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DeviceScalarWhereInputObjectSchema), z.lazy(() => DeviceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DeviceUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateManyWithoutUserNestedInput>;
export const DeviceUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
