import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithoutResourceInputObjectSchema as ResourceSearchHitUpdateWithoutResourceInputObjectSchema } from './ResourceSearchHitUpdateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedUpdateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceSearchHitUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInput>;
export const ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
