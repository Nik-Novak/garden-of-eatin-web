import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateOrConnectWithoutSubmitted_resourcesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutSubmitted_resourcesInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutSubmitted_resourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutSubmitted_resourcesInput>;
export const DeviceCreateNestedOneWithoutSubmitted_resourcesInputObjectZodSchema = makeSchema();
