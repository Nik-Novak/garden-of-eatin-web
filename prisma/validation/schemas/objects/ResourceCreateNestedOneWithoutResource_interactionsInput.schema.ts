import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutResource_interactionsInputObjectSchema as ResourceCreateWithoutResource_interactionsInputObjectSchema } from './ResourceCreateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_interactionsInput.schema';
import { ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema as ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema } from './ResourceCreateOrConnectWithoutResource_interactionsInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ResourceCreateNestedOneWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_interactionsInput>;
export const ResourceCreateNestedOneWithoutResource_interactionsInputObjectZodSchema = makeSchema();
