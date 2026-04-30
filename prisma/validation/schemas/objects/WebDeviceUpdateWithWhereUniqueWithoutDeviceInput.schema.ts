import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithoutDeviceInputObjectSchema as WebDeviceUpdateWithoutDeviceInputObjectSchema } from './WebDeviceUpdateWithoutDeviceInput.schema';
import { WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema as WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WebDeviceUpdateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateWithWhereUniqueWithoutDeviceInput>;
export const WebDeviceUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
