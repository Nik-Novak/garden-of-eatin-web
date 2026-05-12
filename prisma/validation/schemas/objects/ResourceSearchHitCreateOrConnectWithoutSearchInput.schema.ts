import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitCreateWithoutSearchInputObjectSchema as ResourceSearchHitCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema)])
}).strict();
export const ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateOrConnectWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateOrConnectWithoutSearchInput>;
export const ResourceSearchHitCreateOrConnectWithoutSearchInputObjectZodSchema = makeSchema();
