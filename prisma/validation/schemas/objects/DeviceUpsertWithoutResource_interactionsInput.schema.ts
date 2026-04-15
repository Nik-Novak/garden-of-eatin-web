import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutResource_interactionsInputObjectSchema as DeviceUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUpdateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_interactionsInput.schema';
import { DeviceCreateWithoutResource_interactionsInputObjectSchema as DeviceCreateWithoutResource_interactionsInputObjectSchema } from './DeviceCreateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_interactionsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutResource_interactionsInput>;
export const DeviceUpsertWithoutResource_interactionsInputObjectZodSchema = makeSchema();
