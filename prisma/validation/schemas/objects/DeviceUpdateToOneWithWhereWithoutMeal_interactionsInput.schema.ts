import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUpdateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutMeal_interactionsInput>;
export const DeviceUpdateToOneWithWhereWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
