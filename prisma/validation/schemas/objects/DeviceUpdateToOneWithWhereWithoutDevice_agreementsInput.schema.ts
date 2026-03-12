import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUpdateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedUpdateWithoutDevice_agreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutDevice_agreementsInput>;
export const DeviceUpdateToOneWithWhereWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
