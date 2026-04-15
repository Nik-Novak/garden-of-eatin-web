import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutResource_interactionsInputObjectSchema as DeviceCreateWithoutResource_interactionsInputObjectSchema } from './DeviceCreateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutResource_interactionsInput>;
export const DeviceCreateOrConnectWithoutResource_interactionsInputObjectZodSchema = makeSchema();
