import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  email: z.string(),
  status: InviteStatusSchema,
  user_id: z.string().max(24).optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const InviteCreateManyInviterInputObjectSchema: z.ZodType<Prisma.InviteCreateManyInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateManyInviterInput>;
export const InviteCreateManyInviterInputObjectZodSchema = makeSchema();
