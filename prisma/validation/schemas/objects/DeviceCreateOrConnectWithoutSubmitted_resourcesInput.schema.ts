import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_resourcesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutSubmitted_resourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutSubmitted_resourcesInput>;
export const DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectZodSchema = makeSchema();
