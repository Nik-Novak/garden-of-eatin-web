import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUpdateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_mealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInput>;
export const DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInputObjectZodSchema = makeSchema();
