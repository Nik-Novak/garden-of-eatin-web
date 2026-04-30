import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutWeb_devicesInputObjectSchema as DeviceCreateWithoutWeb_devicesInputObjectSchema } from './DeviceCreateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedCreateWithoutWeb_devicesInput.schema';
import { DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema as DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema } from './DeviceCreateOrConnectWithoutWeb_devicesInput.schema';
import { DeviceUpsertWithoutWeb_devicesInputObjectSchema as DeviceUpsertWithoutWeb_devicesInputObjectSchema } from './DeviceUpsertWithoutWeb_devicesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema as DeviceUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutWeb_devicesInput.schema';
import { DeviceUpdateWithoutWeb_devicesInputObjectSchema as DeviceUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUpdateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedUpdateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutWeb_devicesInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutWeb_devicesInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneWithoutWeb_devicesNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneWithoutWeb_devicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneWithoutWeb_devicesNestedInput>;
export const DeviceUpdateOneWithoutWeb_devicesNestedInputObjectZodSchema = makeSchema();
