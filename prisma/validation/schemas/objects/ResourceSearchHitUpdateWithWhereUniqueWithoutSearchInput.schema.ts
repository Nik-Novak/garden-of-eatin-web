import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithoutSearchInputObjectSchema as ResourceSearchHitUpdateWithoutSearchInputObjectSchema } from './ResourceSearchHitUpdateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedUpdateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceSearchHitUpdateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateWithoutSearchInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInput>;
export const ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectZodSchema = makeSchema();
