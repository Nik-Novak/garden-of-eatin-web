import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithoutDeviceInputObjectSchema as ResourceInteractionUpdateWithoutDeviceInputObjectSchema } from './ResourceInteractionUpdateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceInteractionUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInput>;
export const ResourceInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
