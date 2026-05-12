import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUpdateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_search_hitsInput.schema';
import { ResourceCreateWithoutResource_search_hitsInputObjectSchema as ResourceCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_search_hitsInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ResourceUpdateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema)]),
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const ResourceUpsertWithoutResource_search_hitsInputObjectSchema: z.ZodType<Prisma.ResourceUpsertWithoutResource_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpsertWithoutResource_search_hitsInput>;
export const ResourceUpsertWithoutResource_search_hitsInputObjectZodSchema = makeSchema();
