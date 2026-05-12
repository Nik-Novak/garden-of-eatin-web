import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutResource_interactionsInputObjectSchema as DeviceCreateWithoutResource_interactionsInputObjectSchema } from './DeviceCreateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_interactionsInput.schema';
import { DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema as DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema } from './DeviceCreateOrConnectWithoutResource_interactionsInput.schema';
import { DeviceUpsertWithoutResource_interactionsInputObjectSchema as DeviceUpsertWithoutResource_interactionsInputObjectSchema } from './DeviceUpsertWithoutResource_interactionsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutResource_interactionsInput.schema';
import { DeviceUpdateWithoutResource_interactionsInputObjectSchema as DeviceUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUpdateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutResource_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutResource_interactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutResource_interactionsNestedInput>;
export const DeviceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectZodSchema = makeSchema();
