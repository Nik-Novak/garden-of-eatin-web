import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceCreateWithoutResource_interactionsInputObjectSchema as ResourceCreateWithoutResource_interactionsInputObjectSchema } from './ResourceCreateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema)])
}).strict();
export const ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_interactionsInput>;
export const ResourceCreateOrConnectWithoutResource_interactionsInputObjectZodSchema = makeSchema();
