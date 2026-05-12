import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema as ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema } from './ResourceOccurrenceSearchCreateManyDeviceInputEnvelope.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput>;
export const ResourceOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
