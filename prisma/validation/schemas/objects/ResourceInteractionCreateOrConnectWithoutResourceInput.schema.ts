import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionCreateWithoutResourceInputObjectSchema as ResourceInteractionCreateWithoutResourceInputObjectSchema } from './ResourceInteractionCreateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionCreateOrConnectWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCreateOrConnectWithoutResourceInput>;
export const ResourceInteractionCreateOrConnectWithoutResourceInputObjectZodSchema = makeSchema();
