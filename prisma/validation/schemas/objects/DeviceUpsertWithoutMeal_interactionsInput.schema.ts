import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUpdateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_interactionsInput.schema';
import { DeviceCreateWithoutMeal_interactionsInputObjectSchema as DeviceCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_interactionsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutMeal_interactionsInput>;
export const DeviceUpsertWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
