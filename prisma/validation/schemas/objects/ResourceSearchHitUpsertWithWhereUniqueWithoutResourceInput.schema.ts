import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithoutResourceInputObjectSchema as ResourceSearchHitUpdateWithoutResourceInputObjectSchema } from './ResourceSearchHitUpdateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedUpdateWithoutResourceInput.schema';
import { ResourceSearchHitCreateWithoutResourceInputObjectSchema as ResourceSearchHitCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceSearchHitUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInput>;
export const ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
