import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutUserInputObjectSchema as WebDeviceCreateWithoutUserInputObjectSchema } from './WebDeviceCreateWithoutUserInput.schema';
import { WebDeviceUncheckedCreateWithoutUserInputObjectSchema as WebDeviceUncheckedCreateWithoutUserInputObjectSchema } from './WebDeviceUncheckedCreateWithoutUserInput.schema';
import { WebDeviceCreateOrConnectWithoutUserInputObjectSchema as WebDeviceCreateOrConnectWithoutUserInputObjectSchema } from './WebDeviceCreateOrConnectWithoutUserInput.schema';
import { WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema as WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WebDeviceUpsertWithWhereUniqueWithoutUserInput.schema';
import { WebDeviceCreateManyUserInputEnvelopeObjectSchema as WebDeviceCreateManyUserInputEnvelopeObjectSchema } from './WebDeviceCreateManyUserInputEnvelope.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema as WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WebDeviceUpdateWithWhereUniqueWithoutUserInput.schema';
import { WebDeviceUpdateManyWithWhereWithoutUserInputObjectSchema as WebDeviceUpdateManyWithWhereWithoutUserInputObjectSchema } from './WebDeviceUpdateManyWithWhereWithoutUserInput.schema';
import { WebDeviceScalarWhereInputObjectSchema as WebDeviceScalarWhereInputObjectSchema } from './WebDeviceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WebDeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WebDeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WebDeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WebDeviceUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WebDeviceScalarWhereInputObjectSchema), z.lazy(() => WebDeviceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WebDeviceUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutUserNestedInput>;
export const WebDeviceUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
