import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithoutSearchInputObjectSchema as ResourceSearchHitUpdateWithoutSearchInputObjectSchema } from './ResourceSearchHitUpdateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedUpdateWithoutSearchInput.schema';
import { ResourceSearchHitCreateWithoutSearchInputObjectSchema as ResourceSearchHitCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceSearchHitUpdateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInput>;
export const ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectZodSchema = makeSchema();
