import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithoutDeviceInputObjectSchema as ResourceInteractionUpdateWithoutDeviceInputObjectSchema } from './ResourceInteractionUpdateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedUpdateWithoutDeviceInput.schema';
import { ResourceInteractionCreateWithoutDeviceInputObjectSchema as ResourceInteractionCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceInteractionUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInput>;
export const ResourceInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
