import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitScalarWhereInputObjectSchema as ResourceSearchHitScalarWhereInputObjectSchema } from './ResourceSearchHitScalarWhereInput.schema';
import { ResourceSearchHitUpdateManyMutationInputObjectSchema as ResourceSearchHitUpdateManyMutationInputObjectSchema } from './ResourceSearchHitUpdateManyMutationInput.schema';
import { ResourceSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedUpdateManyWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceSearchHitUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateManyWithWhereWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateManyWithWhereWithoutSearchInput>;
export const ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectZodSchema = makeSchema();
