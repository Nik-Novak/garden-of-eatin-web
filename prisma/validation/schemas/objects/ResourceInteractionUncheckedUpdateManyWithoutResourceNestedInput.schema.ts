import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateWithoutResourceInputObjectSchema as ResourceInteractionCreateWithoutResourceInputObjectSchema } from './ResourceInteractionCreateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutResourceInput.schema';
import { ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema as ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceInteractionCreateOrConnectWithoutResourceInput.schema';
import { ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectSchema as ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceInteractionUpsertWithWhereUniqueWithoutResourceInput.schema';
import { ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema as ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema } from './ResourceInteractionCreateManyResourceInputEnvelope.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectSchema as ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectSchema } from './ResourceInteractionUpdateWithWhereUniqueWithoutResourceInput.schema';
import { ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectSchema as ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectSchema } from './ResourceInteractionUpdateManyWithWhereWithoutResourceInput.schema';
import { ResourceInteractionScalarWhereInputObjectSchema as ResourceInteractionScalarWhereInputObjectSchema } from './ResourceInteractionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema), z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ResourceInteractionUncheckedUpdateManyWithoutResourceNestedInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUncheckedUpdateManyWithoutResourceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUncheckedUpdateManyWithoutResourceNestedInput>;
export const ResourceInteractionUncheckedUpdateManyWithoutResourceNestedInputObjectZodSchema = makeSchema();
