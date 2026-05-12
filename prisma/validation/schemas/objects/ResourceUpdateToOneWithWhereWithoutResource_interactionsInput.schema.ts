import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';
import { ResourceUpdateWithoutResource_interactionsInputObjectSchema as ResourceUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUpdateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ResourceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)])
}).strict();
export const ResourceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_interactionsInput>;
export const ResourceUpdateToOneWithWhereWithoutResource_interactionsInputObjectZodSchema = makeSchema();
