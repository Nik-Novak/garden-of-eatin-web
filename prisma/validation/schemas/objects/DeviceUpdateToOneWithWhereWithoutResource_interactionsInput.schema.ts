import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutResource_interactionsInputObjectSchema as DeviceUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUpdateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutResource_interactionsInput>;
export const DeviceUpdateToOneWithWhereWithoutResource_interactionsInputObjectZodSchema = makeSchema();
