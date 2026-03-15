import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutMeal_interactionsInputObjectSchema as DeviceCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_interactionsInput.schema';
import { DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema as DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateOrConnectWithoutMeal_interactionsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutMeal_interactionsInput>;
export const DeviceCreateNestedOneWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
