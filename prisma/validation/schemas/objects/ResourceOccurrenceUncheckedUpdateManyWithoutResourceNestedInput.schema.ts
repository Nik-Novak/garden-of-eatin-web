import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceCreateWithoutResourceInputObjectSchema as ResourceOccurrenceCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedCreateWithoutResourceInput.schema';
import { ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema as ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateOrConnectWithoutResourceInput.schema';
import { ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectSchema as ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInput.schema';
import { ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema as ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema } from './ResourceOccurrenceCreateManyResourceInputEnvelope.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectSchema as ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInput.schema';
import { ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectSchema as ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectSchema } from './ResourceOccurrenceUpdateManyWithWhereWithoutResourceInput.schema';
import { ResourceOccurrenceScalarWhereInputObjectSchema as ResourceOccurrenceScalarWhereInputObjectSchema } from './ResourceOccurrenceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema), z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceOccurrenceUncheckedUpdateManyWithoutResourceNestedInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUncheckedUpdateManyWithoutResourceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUncheckedUpdateManyWithoutResourceNestedInput>;
export const ResourceOccurrenceUncheckedUpdateManyWithoutResourceNestedInputObjectZodSchema = makeSchema();
