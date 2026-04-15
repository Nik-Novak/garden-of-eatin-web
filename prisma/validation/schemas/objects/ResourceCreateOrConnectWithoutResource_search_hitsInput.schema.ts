import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceCreateWithoutResource_search_hitsInputObjectSchema as ResourceCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_search_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema)])
}).strict();
export const ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_search_hitsInput>;
export const ResourceCreateOrConnectWithoutResource_search_hitsInputObjectZodSchema = makeSchema();
