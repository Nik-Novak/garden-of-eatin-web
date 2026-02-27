import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteUpdateWithoutInviterInputObjectSchema as InviteUpdateWithoutInviterInputObjectSchema } from './InviteUpdateWithoutInviterInput.schema';
import { InviteUncheckedUpdateWithoutInviterInputObjectSchema as InviteUncheckedUpdateWithoutInviterInputObjectSchema } from './InviteUncheckedUpdateWithoutInviterInput.schema';
import { InviteCreateWithoutInviterInputObjectSchema as InviteCreateWithoutInviterInputObjectSchema } from './InviteCreateWithoutInviterInput.schema';
import { InviteUncheckedCreateWithoutInviterInputObjectSchema as InviteUncheckedCreateWithoutInviterInputObjectSchema } from './InviteUncheckedCreateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InviteUpdateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedUpdateWithoutInviterInputObjectSchema)]),
  create: z.union([z.lazy(() => InviteCreateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutInviterInputObjectSchema)])
}).strict();
export const InviteUpsertWithWhereUniqueWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutInviterInput>;
export const InviteUpsertWithWhereUniqueWithoutInviterInputObjectZodSchema = makeSchema();
