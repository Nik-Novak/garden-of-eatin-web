import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteUpdateWithoutInviterInputObjectSchema as InviteUpdateWithoutInviterInputObjectSchema } from './InviteUpdateWithoutInviterInput.schema';
import { InviteUncheckedUpdateWithoutInviterInputObjectSchema as InviteUncheckedUpdateWithoutInviterInputObjectSchema } from './InviteUncheckedUpdateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InviteUpdateWithoutInviterInputObjectSchema), z.lazy(() => InviteUncheckedUpdateWithoutInviterInputObjectSchema)])
}).strict();
export const InviteUpdateWithWhereUniqueWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutInviterInput>;
export const InviteUpdateWithWhereUniqueWithoutInviterInputObjectZodSchema = makeSchema();
