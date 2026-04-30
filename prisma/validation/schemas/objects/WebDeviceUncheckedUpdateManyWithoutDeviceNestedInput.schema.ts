import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutDeviceInputObjectSchema as WebDeviceCreateWithoutDeviceInputObjectSchema } from './WebDeviceCreateWithoutDeviceInput.schema';
import { WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema as WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedCreateWithoutDeviceInput.schema';
import { WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema as WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema } from './WebDeviceCreateOrConnectWithoutDeviceInput.schema';
import { WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './WebDeviceUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { WebDeviceCreateManyDeviceInputEnvelopeObjectSchema as WebDeviceCreateManyDeviceInputEnvelopeObjectSchema } from './WebDeviceCreateManyDeviceInputEnvelope.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './WebDeviceUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectSchema as WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './WebDeviceUpdateManyWithWhereWithoutDeviceInput.schema';
import { WebDeviceScalarWhereInputObjectSchema as WebDeviceScalarWhereInputObjectSchema } from './WebDeviceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WebDeviceCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WebDeviceScalarWhereInputObjectSchema), z.lazy(() => WebDeviceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WebDeviceUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedUpdateManyWithoutDeviceNestedInput>;
export const WebDeviceUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
