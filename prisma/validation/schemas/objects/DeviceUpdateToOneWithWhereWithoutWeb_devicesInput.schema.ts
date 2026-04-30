import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutWeb_devicesInputObjectSchema as DeviceUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUpdateWithoutWeb_devicesInput.schema';
import { DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema as DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './DeviceUncheckedUpdateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutWeb_devicesInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutWeb_devicesInput>;
export const DeviceUpdateToOneWithWhereWithoutWeb_devicesInputObjectZodSchema = makeSchema();
