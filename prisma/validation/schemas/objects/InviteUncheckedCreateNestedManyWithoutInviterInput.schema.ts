import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteCreateWithoutInviterInputObjectSchema as InviteCreateWithoutInviterInputObjectSchema } from './InviteCreateWithoutInviterInput.schema';
import { InviteUncheckedCreateWithoutInviterInputObjectSchema as InviteUncheckedCreateWithoutInviterInputObjectSchema } from './InviteUncheckedCreateWithoutInviterInput.schema';
import { InviteCreateOrConnectWithoutInviterInputObjectSchema as InviteCreateOrConnectWithoutInviterInputObjectSchema } from './InviteCreateOrConnectWithoutInviterInput.schema';
import { InviteCreateManyInviterInputEnvelopeObjectSchema as InviteCreateManyInviterInputEnvelopeObjectSchema } from './InviteCreateManyInviterInputEnvelope.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InviteCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteCreateWithoutInviterInputObjectSchema).array(), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InviteCreateOrConnectWithoutInviterInputObjectSchema), z.lazy(() => InviteCreateOrConnectWithoutInviterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InviteCreateManyInviterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InviteWhereUniqueInputObjectSchema), z.lazy(() => InviteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InviteUncheckedCreateNestedManyWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUncheckedCreateNestedManyWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedCreateNestedManyWithoutInviterInput>;
export const InviteUncheckedCreateNestedManyWithoutInviterInputObjectZodSchema = makeSchema();
