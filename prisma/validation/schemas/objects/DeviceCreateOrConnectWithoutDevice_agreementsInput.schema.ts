import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutDevice_agreementsInputObjectSchema as DeviceCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedCreateWithoutDevice_agreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutDevice_agreementsInput>;
export const DeviceCreateOrConnectWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
