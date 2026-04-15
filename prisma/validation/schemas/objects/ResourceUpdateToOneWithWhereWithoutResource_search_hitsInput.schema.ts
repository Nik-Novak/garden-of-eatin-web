import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';
import { ResourceUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUpdateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_search_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ResourceUpdateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema)])
}).strict();
export const ResourceUpdateToOneWithWhereWithoutResource_search_hitsInputObjectSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_search_hitsInput>;
export const ResourceUpdateToOneWithWhereWithoutResource_search_hitsInputObjectZodSchema = makeSchema();
