import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteCreateWithoutInviterInputObjectSchema as InviteCreateWithoutInviterInputObjectSchema } from './InviteCreateWithoutInviterInput.schema';
import { InviteUncheckedCreateWithoutInviterInputObjectSchema as InviteUncheckedCreateWithoutInviterInputObjectSchema } from './InviteUncheckedCreateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InviteCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema)])
}).strict();
export const InviteCreateOrConnectWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteCreateOrConnectWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateOrConnectWithoutInviterInput>;
export const InviteCreateOrConnectWithoutInviterInputObjectZodSchema = makeSchema();
