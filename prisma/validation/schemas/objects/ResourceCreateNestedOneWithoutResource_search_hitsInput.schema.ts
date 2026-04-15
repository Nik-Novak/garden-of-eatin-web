import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutResource_search_hitsInputObjectSchema as ResourceCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_search_hitsInput.schema';
import { ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema as ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateOrConnectWithoutResource_search_hitsInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ResourceCreateNestedOneWithoutResource_search_hitsInputObjectSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_search_hitsInput>;
export const ResourceCreateNestedOneWithoutResource_search_hitsInputObjectZodSchema = makeSchema();
