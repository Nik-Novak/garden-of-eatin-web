import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceSettingsNullableCreateEnvelopeInputObjectSchema as DeviceSettingsNullableCreateEnvelopeInputObjectSchema } from './DeviceSettingsNullableCreateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { DeviceCreateNestedManyWithoutUserInputObjectSchema as DeviceCreateNestedManyWithoutUserInputObjectSchema } from './DeviceCreateNestedManyWithoutUserInput.schema'

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
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWeb_devicesInput>;
export const UserCreateWithoutWeb_devicesInputObjectZodSchema = makeSchema();
