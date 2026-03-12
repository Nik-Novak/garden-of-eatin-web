import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUpdateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedUpdateWithoutDevice_agreementsInput.schema';
import { DeviceCreateWithoutDevice_agreementsInputObjectSchema as DeviceCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedCreateWithoutDevice_agreementsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutDevice_agreementsInput>;
export const DeviceUpsertWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
