import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceUpdateWithoutResource_interactionsInputObjectSchema as ResourceUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUpdateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_interactionsInput.schema';
import { ResourceCreateWithoutResource_interactionsInputObjectSchema as ResourceCreateWithoutResource_interactionsInputObjectSchema } from './ResourceCreateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_interactionsInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ResourceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]),
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const ResourceUpsertWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.ResourceUpsertWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpsertWithoutResource_interactionsInput>;
export const ResourceUpsertWithoutResource_interactionsInputObjectZodSchema = makeSchema();
