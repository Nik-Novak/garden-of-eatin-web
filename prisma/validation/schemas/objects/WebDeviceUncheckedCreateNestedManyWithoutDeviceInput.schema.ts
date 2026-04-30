import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutDeviceInputObjectSchema as WebDeviceCreateWithoutDeviceInputObjectSchema } from './WebDeviceCreateWithoutDeviceInput.schema';
import { WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema as WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedCreateWithoutDeviceInput.schema';
import { WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema as WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema } from './WebDeviceCreateOrConnectWithoutDeviceInput.schema';
import { WebDeviceCreateManyDeviceInputEnvelopeObjectSchema as WebDeviceCreateManyDeviceInputEnvelopeObjectSchema } from './WebDeviceCreateManyDeviceInputEnvelope.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WebDeviceCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WebDeviceUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.WebDeviceUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUncheckedCreateNestedManyWithoutDeviceInput>;
export const WebDeviceUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
