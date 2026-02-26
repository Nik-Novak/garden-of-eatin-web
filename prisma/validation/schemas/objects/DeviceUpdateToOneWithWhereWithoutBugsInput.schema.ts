import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutBugsInputObjectSchema as DeviceUpdateWithoutBugsInputObjectSchema } from './DeviceUpdateWithoutBugsInput.schema';
import { DeviceUncheckedUpdateWithoutBugsInputObjectSchema as DeviceUncheckedUpdateWithoutBugsInputObjectSchema } from './DeviceUncheckedUpdateWithoutBugsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutBugsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutBugsInput>;
export const DeviceUpdateToOneWithWhereWithoutBugsInputObjectZodSchema = makeSchema();
