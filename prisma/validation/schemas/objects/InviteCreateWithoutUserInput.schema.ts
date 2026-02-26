import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { UserCreateNestedOneWithoutInvites_sentInputObjectSchema as UserCreateNestedOneWithoutInvites_sentInputObjectSchema } from './UserCreateNestedOneWithoutInvites_sentInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  email: z.string(),
  status: InviteStatusSchema,
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  inviter: z.lazy(() => UserCreateNestedOneWithoutInvites_sentInputObjectSchema)
}).strict();
export const InviteCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateWithoutUserInput>;
export const InviteCreateWithoutUserInputObjectZodSchema = makeSchema();
