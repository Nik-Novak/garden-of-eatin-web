import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  status: InviteStatusSchema,
  user_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const InviteUncheckedCreateWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUncheckedCreateWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedCreateWithoutInviterInput>;
export const InviteUncheckedCreateWithoutInviterInputObjectZodSchema = makeSchema();
