import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateWithoutDeviceInputObjectSchema as ResourceInteractionCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutDeviceInput.schema';
import { ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema as ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateOrConnectWithoutDeviceInput.schema';
import { ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema as ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema } from './ResourceInteractionCreateManyDeviceInputEnvelope.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceInteractionCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInput>;
export const ResourceInteractionUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
