import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { UserCreateNestedOneWithoutInvites_sentInputObjectSchema as UserCreateNestedOneWithoutInvites_sentInputObjectSchema } from './UserCreateNestedOneWithoutInvites_sentInput.schema';
import { UserCreateNestedOneWithoutInvite_usedInputObjectSchema as UserCreateNestedOneWithoutInvite_usedInputObjectSchema } from './UserCreateNestedOneWithoutInvite_usedInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  email: z.string(),
  status: InviteStatusSchema,
  created_at: z.coerce.date().optional(),
  inviter: z.lazy(() => UserCreateNestedOneWithoutInvites_sentInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutInvite_usedInputObjectSchema).optional()
}).strict();
export const InviteCreateInputObjectSchema: z.ZodType<Prisma.InviteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateInput>;
export const InviteCreateInputObjectZodSchema = makeSchema();
