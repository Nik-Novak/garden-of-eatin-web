import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutWeb_devicesInputObjectSchema as DeviceUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUpdateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedUpdateWithoutWeb_devicesInput.schema';
import { DeviceCreateWithoutWeb_devicesInputObjectSchema as DeviceCreateWithoutWeb_devicesInputObjectSchema } from './DeviceCreateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedCreateWithoutWeb_devicesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutWeb_devicesInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutWeb_devicesInput>;
export const DeviceUpsertWithoutWeb_devicesInputObjectZodSchema = makeSchema();
