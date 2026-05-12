import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutResource_interactionsInputObjectSchema as ResourceCreateWithoutResource_interactionsInputObjectSchema } from './ResourceCreateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_interactionsInput.schema';
import { ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema as ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema } from './ResourceCreateOrConnectWithoutResource_interactionsInput.schema';
import { ResourceUpsertWithoutResource_interactionsInputObjectSchema as ResourceUpsertWithoutResource_interactionsInputObjectSchema } from './ResourceUpsertWithoutResource_interactionsInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema as ResourceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema } from './ResourceUpdateToOneWithWhereWithoutResource_interactionsInput.schema';
import { ResourceUpdateWithoutResource_interactionsInputObjectSchema as ResourceUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUpdateWithoutResource_interactionsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResource_interactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutResource_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ResourceUpdateToOneWithWhereWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUpdateWithoutResource_interactionsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_interactionsInputObjectSchema)]).optional()
}).strict();
export const ResourceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResource_interactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResource_interactionsNestedInput>;
export const ResourceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectZodSchema = makeSchema();
