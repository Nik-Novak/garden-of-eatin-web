import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutBugsInputObjectSchema as DeviceUpdateWithoutBugsInputObjectSchema } from './DeviceUpdateWithoutBugsInput.schema';
import { DeviceUncheckedUpdateWithoutBugsInputObjectSchema as DeviceUncheckedUpdateWithoutBugsInputObjectSchema } from './DeviceUncheckedUpdateWithoutBugsInput.schema';
import { DeviceCreateWithoutBugsInputObjectSchema as DeviceCreateWithoutBugsInputObjectSchema } from './DeviceCreateWithoutBugsInput.schema';
import { DeviceUncheckedCreateWithoutBugsInputObjectSchema as DeviceUncheckedCreateWithoutBugsInputObjectSchema } from './DeviceUncheckedCreateWithoutBugsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutBugsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutBugsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutBugsInput>;
export const DeviceUpsertWithoutBugsInputObjectZodSchema = makeSchema();
