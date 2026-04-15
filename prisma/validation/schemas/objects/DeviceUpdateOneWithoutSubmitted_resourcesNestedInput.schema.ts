import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateOrConnectWithoutSubmitted_resourcesInput.schema';
import { DeviceUpsertWithoutSubmitted_resourcesInputObjectSchema as DeviceUpsertWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUpsertWithoutSubmitted_resourcesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInputObjectSchema as DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInput.schema';
import { DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUpdateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_resourcesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutSubmitted_resourcesInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutSubmitted_resourcesInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneWithoutSubmitted_resourcesNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneWithoutSubmitted_resourcesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneWithoutSubmitted_resourcesNestedInput>;
export const DeviceUpdateOneWithoutSubmitted_resourcesNestedInputObjectZodSchema = makeSchema();
