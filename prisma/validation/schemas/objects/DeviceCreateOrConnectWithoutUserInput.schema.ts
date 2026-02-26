import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutUserInputObjectSchema as DeviceCreateWithoutUserInputObjectSchema } from './DeviceCreateWithoutUserInput.schema';
import { DeviceUncheckedCreateWithoutUserInputObjectSchema as DeviceUncheckedCreateWithoutUserInputObjectSchema } from './DeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutUserInput>;
export const DeviceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
