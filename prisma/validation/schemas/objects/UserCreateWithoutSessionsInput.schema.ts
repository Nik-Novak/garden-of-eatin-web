import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceSettingsNullableCreateEnvelopeInputObjectSchema as DeviceSettingsNullableCreateEnvelopeInputObjectSchema } from './DeviceSettingsNullableCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { DeviceCreateNestedManyWithoutUserInputObjectSchema as DeviceCreateNestedManyWithoutUserInputObjectSchema } from './DeviceCreateNestedManyWithoutUserInput.schema';
import { InviteCreateNestedManyWithoutInviterInputObjectSchema as InviteCreateNestedManyWithoutInviterInputObjectSchema } from './InviteCreateNestedManyWithoutInviterInput.schema';
import { InviteCreateNestedOneWithoutUserInputObjectSchema as InviteCreateNestedOneWithoutUserInputObjectSchema } from './InviteCreateNestedOneWithoutUserInput.schema';
import { OpportunityApplicationCreateNestedManyWithoutUserInputObjectSchema as OpportunityApplicationCreateNestedManyWithoutUserInputObjectSchema } from './OpportunityApplicationCreateNestedManyWithoutUserInput.schema'

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
  invites_sent: z.lazy(() => InviteCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invite_used: z.lazy(() => InviteCreateNestedOneWithoutUserInputObjectSchema).optional(),
  opportunity_applications: z.lazy(() => OpportunityApplicationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
