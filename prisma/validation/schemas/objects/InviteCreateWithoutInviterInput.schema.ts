import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { UserCreateNestedOneWithoutInvite_usedInputObjectSchema as UserCreateNestedOneWithoutInvite_usedInputObjectSchema } from './UserCreateNestedOneWithoutInvite_usedInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  email: z.string(),
  status: InviteStatusSchema,
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInvite_usedInputObjectSchema).optional()
}).strict();
export const InviteCreateWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteCreateWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateWithoutInviterInput>;
export const InviteCreateWithoutInviterInputObjectZodSchema = makeSchema();
