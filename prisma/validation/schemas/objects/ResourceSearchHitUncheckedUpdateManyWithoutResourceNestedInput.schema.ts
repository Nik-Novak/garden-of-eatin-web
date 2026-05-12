import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitCreateWithoutResourceInputObjectSchema as ResourceSearchHitCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateWithoutResourceInput.schema';
import { ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema as ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceSearchHitUncheckedCreateWithoutResourceInput.schema';
import { ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema as ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceSearchHitCreateOrConnectWithoutResourceInput.schema';
import { ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectSchema as ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInput.schema';
import { ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema as ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema } from './ResourceSearchHitCreateManyResourceInputEnvelope.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectSchema as ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInput.schema';
import { ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectSchema as ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectSchema } from './ResourceSearchHitUpdateManyWithWhereWithoutResourceInput.schema';
import { ResourceSearchHitScalarWhereInputObjectSchema as ResourceSearchHitScalarWhereInputObjectSchema } from './ResourceSearchHitScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUpsertWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceSearchHitCreateManyResourceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema), z.lazy(() => ResourceSearchHitWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUpdateWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectSchema), z.lazy(() => ResourceSearchHitUpdateManyWithWhereWithoutResourceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceSearchHitUncheckedUpdateManyWithoutResourceNestedInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUncheckedUpdateManyWithoutResourceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUncheckedUpdateManyWithoutResourceNestedInput>;
export const ResourceSearchHitUncheckedUpdateManyWithoutResourceNestedInputObjectZodSchema = makeSchema();
