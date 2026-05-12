import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutResource_search_hitsInputObjectSchema as ResourceCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_search_hitsInput.schema';
import { ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema as ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema } from './ResourceCreateOrConnectWithoutResource_search_hitsInput.schema';
import { ResourceUpsertWithoutResource_search_hitsInputObjectSchema as ResourceUpsertWithoutResource_search_hitsInputObjectSchema } from './ResourceUpsertWithoutResource_search_hitsInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateToOneWithWhereWithoutResource_search_hitsInputObjectSchema as ResourceUpdateToOneWithWhereWithoutResource_search_hitsInputObjectSchema } from './ResourceUpdateToOneWithWhereWithoutResource_search_hitsInput.schema';
import { ResourceUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUpdateWithoutResource_search_hitsInput.schema';
import { ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema as ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_search_hitsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_search_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResource_search_hitsInputObjectSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutResource_search_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ResourceUpdateToOneWithWhereWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUpdateWithoutResource_search_hitsInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_search_hitsInputObjectSchema)]).optional()
}).strict();
export const ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInputObjectSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInput>;
export const ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInputObjectZodSchema = makeSchema();
