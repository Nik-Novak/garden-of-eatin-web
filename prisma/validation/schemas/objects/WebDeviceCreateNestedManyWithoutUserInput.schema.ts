import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutUserInputObjectSchema as WebDeviceCreateWithoutUserInputObjectSchema } from './WebDeviceCreateWithoutUserInput.schema';
import { WebDeviceUncheckedCreateWithoutUserInputObjectSchema as WebDeviceUncheckedCreateWithoutUserInputObjectSchema } from './WebDeviceUncheckedCreateWithoutUserInput.schema';
import { WebDeviceCreateOrConnectWithoutUserInputObjectSchema as WebDeviceCreateOrConnectWithoutUserInputObjectSchema } from './WebDeviceCreateOrConnectWithoutUserInput.schema';
import { WebDeviceCreateManyUserInputEnvelopeObjectSchema as WebDeviceCreateManyUserInputEnvelopeObjectSchema } from './WebDeviceCreateManyUserInputEnvelope.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WebDeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WebDeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WebDeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WebDeviceWhereUniqueInputObjectSchema), z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WebDeviceCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateNestedManyWithoutUserInput>;
export const WebDeviceCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
