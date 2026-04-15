import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionCreateWithoutDeviceInputObjectSchema as ResourceInteractionCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionCreateWithoutDeviceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceInteractionCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCreateOrConnectWithoutDeviceInput>;
export const ResourceInteractionCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
