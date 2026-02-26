import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSettingsNullableCreateEnvelopeInputObjectSchema as DeviceSettingsNullableCreateEnvelopeInputObjectSchema } from './DeviceSettingsNullableCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema as DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DeviceUncheckedCreateNestedManyWithoutUserInput.schema';
import { InviteUncheckedCreateNestedManyWithoutInviterInputObjectSchema as InviteUncheckedCreateNestedManyWithoutInviterInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutInviterInput.schema';
import { InviteUncheckedCreateNestedOneWithoutUserInputObjectSchema as InviteUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './InviteUncheckedCreateNestedOneWithoutUserInput.schema';
import { OpportunityApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema as OpportunityApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invites_sent: z.lazy(() => InviteUncheckedCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invite_used: z.lazy(() => InviteUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  opportunity_applications: z.lazy(() => OpportunityApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;
export const UserUncheckedCreateWithoutSessionsInputObjectZodSchema = makeSchema();
