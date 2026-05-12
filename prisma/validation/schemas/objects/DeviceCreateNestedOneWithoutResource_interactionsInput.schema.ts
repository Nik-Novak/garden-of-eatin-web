import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutResource_interactionsInputObjectSchema as DeviceCreateWithoutResource_interactionsInputObjectSchema } from './DeviceCreateWithoutResource_interactionsInput.schema';
import { DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema as DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_interactionsInput.schema';
import { DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema as DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema } from './DeviceCreateOrConnectWithoutResource_interactionsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutResource_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutResource_interactionsInput>;
export const DeviceCreateNestedOneWithoutResource_interactionsInputObjectZodSchema = makeSchema();
