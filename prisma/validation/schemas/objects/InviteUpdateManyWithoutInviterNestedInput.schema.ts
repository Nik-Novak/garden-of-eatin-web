import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteCreateWithoutInviterInputObjectSchema as InviteCreateWithoutInviterInputObjectSchema } from './InviteCreateWithoutInviterInput.schema';
import { InviteUncheckedCreateWithoutInviterInputObjectSchema as InviteUncheckedCreateWithoutInviterInputObjectSchema } from './InviteUncheckedCreateWithoutInviterInput.schema';
import { InviteCreateOrConnectWithoutInviterInputObjectSchema as InviteCreateOrConnectWithoutInviterInputObjectSchema } from './InviteCreateOrConnectWithoutInviterInput.schema';
import { InviteUpsertWithWhereUniqueWithoutInviterInputObjectSchema as InviteUpsertWithWhereUniqueWithoutInviterInputObjectSchema } from './InviteUpsertWithWhereUniqueWithoutInviterInput.schema';
import { InviteCreateManyInviterInputEnvelopeObjectSchema as InviteCreateManyInviterInputEnvelopeObjectSchema } from './InviteCreateManyInviterInputEnvelope.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteUpdateWithWhereUniqueWithoutInviterInputObjectSchema as InviteUpdateWithWhereUniqueWithoutInviterInputObjectSchema } from './InviteUpdateWithWhereUniqueWithoutInviterInput.schema';
import { InviteUpdateManyWithWhereWithoutInviterInputObjectSchema as InviteUpdateManyWithWhereWithoutInviterInputObjectSchema } from './InviteUpdateManyWithWhereWithoutInviterInput.schema';
import { InviteScalarWhereInputObjectSchema as InviteScalarWhereInputObjectSchema } from './InviteScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InviteCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteCreateWithoutInviterInputObjectSchema).array(), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InviteCreateOrConnectWithoutInviterInputObjectSchema), z.lazy(() => InviteCreateOrConnectWithoutInviterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InviteUpsertWithWhereUniqueWithoutInviterInputObjectSchema), z.lazy(() => InviteUpsertWithWhereUniqueWithoutInviterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InviteCreateManyInviterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InviteWhereUniqueInputObjectSchema), z.lazy(() => InviteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InviteWhereUniqueInputObjectSchema), z.lazy(() => InviteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InviteWhereUniqueInputObjectSchema), z.lazy(() => InviteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InviteWhereUniqueInputObjectSchema), z.lazy(() => InviteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InviteUpdateWithWhereUniqueWithoutInviterInputObjectSchema), z.lazy(() => InviteUpdateWithWhereUniqueWithoutInviterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InviteUpdateManyWithWhereWithoutInviterInputObjectSchema), z.lazy(() => InviteUpdateManyWithWhereWithoutInviterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InviteScalarWhereInputObjectSchema), z.lazy(() => InviteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InviteUpdateManyWithoutInviterNestedInputObjectSchema: z.ZodType<Prisma.InviteUpdateManyWithoutInviterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateManyWithoutInviterNestedInput>;
export const InviteUpdateManyWithoutInviterNestedInputObjectZodSchema = makeSchema();
