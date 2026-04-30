import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceCreateWithoutDeviceInputObjectSchema as WebDeviceCreateWithoutDeviceInputObjectSchema } from './WebDeviceCreateWithoutDeviceInput.schema';
import { WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema as WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const WebDeviceCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutDeviceInput>;
export const WebDeviceCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
