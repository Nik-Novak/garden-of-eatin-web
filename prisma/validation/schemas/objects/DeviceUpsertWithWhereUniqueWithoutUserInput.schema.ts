import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateWithoutUserInputObjectSchema as DeviceUpdateWithoutUserInputObjectSchema } from './DeviceUpdateWithoutUserInput.schema';
import { DeviceUncheckedUpdateWithoutUserInputObjectSchema as DeviceUncheckedUpdateWithoutUserInputObjectSchema } from './DeviceUncheckedUpdateWithoutUserInput.schema';
import { DeviceCreateWithoutUserInputObjectSchema as DeviceCreateWithoutUserInputObjectSchema } from './DeviceCreateWithoutUserInput.schema';
import { DeviceUncheckedCreateWithoutUserInputObjectSchema as DeviceUncheckedCreateWithoutUserInputObjectSchema } from './DeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput>;
export const DeviceUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
