import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitCreateWithoutResourceInputObjectSchema as ResourceSearchHitCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateOrConnectWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateOrConnectWithoutResourceInput>;
export const ResourceSearchHitCreateOrConnectWithoutResourceInputObjectZodSchema = makeSchema();
