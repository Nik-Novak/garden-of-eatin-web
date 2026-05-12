import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema as ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema } from './ResourceOccurrenceSearchCreateManyDeviceInputEnvelope.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchScalarWhereInputObjectSchema as ResourceOccurrenceSearchScalarWhereInputObjectSchema } from './ResourceOccurrenceSearchScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInput>;
export const ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
