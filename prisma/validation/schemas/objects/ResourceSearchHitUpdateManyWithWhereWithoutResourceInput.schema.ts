import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitScalarWhereInputObjectSchema as ResourceSearchHitScalarWhereInputObjectSchema } from './ResourceSearchHitScalarWhereInput.schema';
import { ResourceSearchHitUpdateManyMutationInputObjectSchema as ResourceSearchHitUpdateManyMutationInputObjectSchema } from './ResourceSearchHitUpdateManyMutationInput.schema';
import { ResourceSearchHitUncheckedUpdateManyWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedUpdateManyWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedUpdateManyWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceSearchHitUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateManyWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateManyWithWhereWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateManyWithWhereWithoutResourceInput>;
export const ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectZodSchema = makeSchema();
