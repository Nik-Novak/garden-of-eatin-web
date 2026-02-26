import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUpdateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_mealsInput.schema';
import { DeviceCreateWithoutSubmitted_mealsInputObjectSchema as DeviceCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_mealsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutSubmitted_mealsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutSubmitted_mealsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutSubmitted_mealsInput>;
export const DeviceUpsertWithoutSubmitted_mealsInputObjectZodSchema = makeSchema();
