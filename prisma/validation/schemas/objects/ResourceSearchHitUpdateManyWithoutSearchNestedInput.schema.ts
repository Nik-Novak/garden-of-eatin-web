import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateWithoutSearchInputObjectSchema as ResourceSearchHitCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateWithoutSearchInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutSearchInput.schema';
import { ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema as ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema } from './ResourceSearchHitCreateOrConnectWithoutSearchInput.schema';
import { ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema as ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema } from './ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInput.schema';
import { ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema as ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema } from './ResourceSearchHitCreateManySearchInputEnvelope.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema as ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema } from './ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInput.schema';
import { ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema as ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema } from './ResourceSearchHitUpdateManyWithWhereWithoutSearchInput.schema';
import { ResourceSearchHitScalarWhereInputObjectSchema as ResourceSearchHitScalarWhereInputObjectSchema } from './ResourceSearchHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitCreateWithoutSearchInputObjectSchema).array(), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitCreateOrConnectWithoutSearchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceSearchHitCreateManySearchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema), z.lazy(() => ResourceSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceSearchHitUpdateManyWithoutSearchNestedInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateManyWithoutSearchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateManyWithoutSearchNestedInput>;
export const ResourceSearchHitUpdateManyWithoutSearchNestedInputObjectZodSchema = makeSchema();
