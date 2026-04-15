import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutSubmitterInputObjectSchema as ResourceCreateWithoutSubmitterInputObjectSchema } from './ResourceCreateWithoutSubmitterInput.schema';
import { ResourceUncheckedCreateWithoutSubmitterInputObjectSchema as ResourceUncheckedCreateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedCreateWithoutSubmitterInput.schema';
import { ResourceCreateOrConnectWithoutSubmitterInputObjectSchema as ResourceCreateOrConnectWithoutSubmitterInputObjectSchema } from './ResourceCreateOrConnectWithoutSubmitterInput.schema';
import { ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema as ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema } from './ResourceUpsertWithWhereUniqueWithoutSubmitterInput.schema';
import { ResourceCreateManySubmitterInputEnvelopeObjectSchema as ResourceCreateManySubmitterInputEnvelopeObjectSchema } from './ResourceCreateManySubmitterInputEnvelope.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema as ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema } from './ResourceUpdateWithWhereUniqueWithoutSubmitterInput.schema';
import { ResourceUpdateManyWithWhereWithoutSubmitterInputObjectSchema as ResourceUpdateManyWithWhereWithoutSubmitterInputObjectSchema } from './ResourceUpdateManyWithWhereWithoutSubmitterInput.schema';
import { ResourceScalarWhereInputObjectSchema as ResourceScalarWhereInputObjectSchema } from './ResourceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceWhereUniqueInputObjectSchema), z.lazy(() => ResourceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceWhereUniqueInputObjectSchema), z.lazy(() => ResourceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceWhereUniqueInputObjectSchema), z.lazy(() => ResourceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceWhereUniqueInputObjectSchema), z.lazy(() => ResourceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceUpdateManyWithWhereWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUpdateManyWithWhereWithoutSubmitterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceScalarWhereInputObjectSchema), z.lazy(() => ResourceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceUncheckedUpdateManyWithoutSubmitterNestedInputObjectSchema: z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutSubmitterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutSubmitterNestedInput>;
export const ResourceUncheckedUpdateManyWithoutSubmitterNestedInputObjectZodSchema = makeSchema();
