import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  inviter_id: z.string(),
  email: z.string()
}).strict();
export const InviteInviter_idEmailCompoundUniqueInputObjectSchema: z.ZodType<Prisma.InviteInviter_idEmailCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteInviter_idEmailCompoundUniqueInput>;
export const InviteInviter_idEmailCompoundUniqueInputObjectZodSchema = makeSchema();
