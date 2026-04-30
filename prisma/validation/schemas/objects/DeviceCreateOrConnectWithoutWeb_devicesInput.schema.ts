import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutWeb_devicesInputObjectSchema as DeviceCreateWithoutWeb_devicesInputObjectSchema } from './DeviceCreateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedCreateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutWeb_devicesInput>;
export const DeviceCreateOrConnectWithoutWeb_devicesInputObjectZodSchema = makeSchema();
