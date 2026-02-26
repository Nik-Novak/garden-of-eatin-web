import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteInviter_idEmailCompoundUniqueInputObjectSchema as InviteInviter_idEmailCompoundUniqueInputObjectSchema } from './InviteInviter_idEmailCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  user_id: z.string().max(24).optional(),
  inviter_id_email: z.lazy(() => InviteInviter_idEmailCompoundUniqueInputObjectSchema).optional()
}).strict();
export const InviteWhereUniqueInputObjectSchema: z.ZodType<Prisma.InviteWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteWhereUniqueInput>;
export const InviteWhereUniqueInputObjectZodSchema = makeSchema();
