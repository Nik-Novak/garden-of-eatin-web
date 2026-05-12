import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateWithoutSearchInputObjectSchema as ResourceSearchHitCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutSearchInput.schema';
import { ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema as ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateOrConnectWithoutSearchInput.schema';
import { ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema as ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema } from './ResourceSearchHitCreateManySearchInputEnvelope.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema).array(), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceSearchHitCreateNestedManyWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateNestedManyWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateNestedManyWithoutSearchInput>;
export const ResourceSearchHitCreateNestedManyWithoutSearchInputObjectZodSchema = makeSchema();
