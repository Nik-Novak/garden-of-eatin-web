import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutUserInputObjectSchema as DeviceCreateWithoutUserInputObjectSchema } from './DeviceCreateWithoutUserInput.schema';
import { DeviceUncheckedCreateWithoutUserInputObjectSchema as DeviceUncheckedCreateWithoutUserInputObjectSchema } from './DeviceUncheckedCreateWithoutUserInput.schema';
import { DeviceCreateOrConnectWithoutUserInputObjectSchema as DeviceCreateOrConnectWithoutUserInputObjectSchema } from './DeviceCreateOrConnectWithoutUserInput.schema';
import { DeviceCreateManyUserInputEnvelopeObjectSchema as DeviceCreateManyUserInputEnvelopeObjectSchema } from './DeviceCreateManyUserInputEnvelope.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DeviceWhereUniqueInputObjectSchema), z.lazy(() => DeviceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUncheckedCreateNestedManyWithoutUserInput>;
export const DeviceUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
