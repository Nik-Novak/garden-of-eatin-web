import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutWeb_devicesInputObjectSchema as DeviceCreateWithoutWeb_devicesInputObjectSchema } from './DeviceCreateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedCreateWithoutWeb_devicesInput.schema';
import { DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema as DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema } from './DeviceCreateOrConnectWithoutWeb_devicesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutWeb_devicesInput>;
export const DeviceCreateNestedOneWithoutWeb_devicesInputObjectZodSchema = makeSchema();
