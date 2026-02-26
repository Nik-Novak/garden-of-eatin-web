import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  status: InviteStatusSchema,
  inviter_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const InviteUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedCreateWithoutUserInput>;
export const InviteUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
