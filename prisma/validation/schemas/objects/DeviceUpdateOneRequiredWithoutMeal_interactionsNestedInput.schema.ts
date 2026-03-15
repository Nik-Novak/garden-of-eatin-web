import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutMeal_interactionsInputObjectSchema as DeviceCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_interactionsInput.schema';
import { DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema as DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateOrConnectWithoutMeal_interactionsInput.schema';
import { DeviceUpsertWithoutMeal_interactionsInputObjectSchema as DeviceUpsertWithoutMeal_interactionsInputObjectSchema } from './DeviceUpsertWithoutMeal_interactionsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutMeal_interactionsInput.schema';
import { DeviceUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUpdateWithoutMeal_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutMeal_interactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutMeal_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInput>;
export const DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectZodSchema = makeSchema();
