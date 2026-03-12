import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutDevice_agreementsInputObjectSchema as DeviceCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateWithoutDevice_agreementsInput.schema';
import { DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema as DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema } from './DeviceUncheckedCreateWithoutDevice_agreementsInput.schema';
import { DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema as DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateOrConnectWithoutDevice_agreementsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutDevice_agreementsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutDevice_agreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutDevice_agreementsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutDevice_agreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutDevice_agreementsInput>;
export const DeviceCreateNestedOneWithoutDevice_agreementsInputObjectZodSchema = makeSchema();
