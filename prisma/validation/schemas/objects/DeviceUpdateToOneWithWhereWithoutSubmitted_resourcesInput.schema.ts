import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUpdateWithoutSubmitted_resourcesInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_resourcesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutSubmitted_resourcesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_resourcesInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInput>;
export const DeviceUpdateToOneWithWhereWithoutSubmitted_resourcesInputObjectZodSchema = makeSchema();
