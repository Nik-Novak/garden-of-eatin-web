import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutDevice_agreementsInputObjectSchema as DeviceCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedCreateWithoutDevice_agreementsInput.schema';
import { DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema as DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateOrConnectWithoutDevice_agreementsInput.schema';
import { DeviceUpsertWithoutDevice_agreementsInputObjectSchema as DeviceUpsertWithoutDevice_agreementsInputObjectSchema } from './DeviceUpsertWithoutDevice_agreementsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutDevice_agreementsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutDevice_agreementsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutDevice_agreementsInput.schema';
import { DeviceUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUpdateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedUpdateWithoutDevice_agreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutDevice_agreementsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutDevice_agreementsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInput>;
export const DeviceUpdateOneRequiredWithoutDevice_agreementsNestedInputObjectZodSchema = makeSchema();
