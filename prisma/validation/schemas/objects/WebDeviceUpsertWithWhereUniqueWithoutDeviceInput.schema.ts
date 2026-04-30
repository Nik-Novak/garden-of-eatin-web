import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithoutDeviceInputObjectSchema as WebDeviceUpdateWithoutDeviceInputObjectSchema } from './WebDeviceUpdateWithoutDeviceInput.schema';
import { WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema as WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutDeviceInput.schema';
import { WebDeviceCreateWithoutDeviceInputObjectSchema as WebDeviceCreateWithoutDeviceInputObjectSchema } from './WebDeviceCreateWithoutDeviceInput.schema';
import { WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema as WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WebDeviceUpdateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutDeviceInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.WebDeviceUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpsertWithWhereUniqueWithoutDeviceInput>;
export const WebDeviceUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
