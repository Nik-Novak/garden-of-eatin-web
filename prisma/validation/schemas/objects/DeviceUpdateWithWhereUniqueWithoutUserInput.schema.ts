import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateWithoutUserInputObjectSchema as DeviceUpdateWithoutUserInputObjectSchema } from './DeviceUpdateWithoutUserInput.schema';
import { DeviceUncheckedUpdateWithoutUserInputObjectSchema as DeviceUncheckedUpdateWithoutUserInputObjectSchema } from './DeviceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const DeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput>;
export const DeviceUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
