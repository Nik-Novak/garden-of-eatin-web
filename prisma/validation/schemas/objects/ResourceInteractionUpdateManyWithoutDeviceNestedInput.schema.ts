import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateWithoutDeviceInputObjectSchema as ResourceInteractionCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutDeviceInput.schema';
import { ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema as ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateOrConnectWithoutDeviceInput.schema';
import { ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema as ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema } from './ResourceInteractionCreateManyDeviceInputEnvelope.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema as ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './ResourceInteractionUpdateManyWithWhereWithoutDeviceInput.schema';
import { ResourceInteractionScalarWhereInputObjectSchema as ResourceInteractionScalarWhereInputObjectSchema } from './ResourceInteractionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema), z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceInteractionUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateManyWithoutDeviceNestedInput>;
export const ResourceInteractionUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
