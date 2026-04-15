import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateWithoutResourceInputObjectSchema as ResourceSearchHitCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutResourceInput.schema';
import { ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema as ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateOrConnectWithoutResourceInput.schema';
import { ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema as ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema } from './ResourceSearchHitCreateManyResourceInputEnvelope.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceSearchHitCreateNestedManyWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateNestedManyWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateNestedManyWithoutResourceInput>;
export const ResourceSearchHitCreateNestedManyWithoutResourceInputObjectZodSchema = makeSchema();
