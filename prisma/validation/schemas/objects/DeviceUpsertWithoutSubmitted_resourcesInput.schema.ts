import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUpdateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_resourcesInput.schema';
import { DeviceCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_resourcesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_resourcesInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutSubmitted_resourcesInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutSubmitted_resourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutSubmitted_resourcesInput>;
export const DeviceUpsertWithoutSubmitted_resourcesInputObjectZodSchema = makeSchema();
