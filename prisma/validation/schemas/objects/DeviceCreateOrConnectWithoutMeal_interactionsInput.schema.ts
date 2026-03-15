import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutMeal_interactionsInputObjectSchema as DeviceCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutMeal_interactionsInput>;
export const DeviceCreateOrConnectWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
