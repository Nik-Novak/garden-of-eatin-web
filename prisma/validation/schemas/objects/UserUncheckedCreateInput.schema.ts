import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceSettingsNullableCreateEnvelopeInputObjectSchema as DeviceSettingsNullableCreateEnvelopeInputObjectSchema } from './DeviceSettingsNullableCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema as DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DeviceUncheckedCreateNestedManyWithoutUserInput.schema';
import { WebDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema as WebDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WebDeviceUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableCreateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  web_devices: z.lazy(() => WebDeviceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
