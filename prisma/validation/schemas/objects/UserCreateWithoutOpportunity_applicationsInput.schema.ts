import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsNullableCreateEnvelopeInputObjectSchema as DeviceSettingsNullableCreateEnvelopeInputObjectSchema } from './DeviceSettingsNullableCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { DeviceCreateNestedManyWithoutUserInputObjectSchema as DeviceCreateNestedManyWithoutUserInputObjectSchema } from './DeviceCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { InviteCreateNestedManyWithoutInviterInputObjectSchema as InviteCreateNestedManyWithoutInviterInputObjectSchema } from './InviteCreateNestedManyWithoutInviterInput.schema';
import { InviteCreateNestedOneWithoutUserInputObjectSchema as InviteCreateNestedOneWithoutUserInputObjectSchema } from './InviteCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invites_sent: z.lazy(() => InviteCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invite_used: z.lazy(() => InviteCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOpportunity_applicationsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOpportunity_applicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOpportunity_applicationsInput>;
export const UserCreateWithoutOpportunity_applicationsInputObjectZodSchema = makeSchema();
