import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DeviceSettingsNullableUpdateEnvelopeInputObjectSchema as DeviceSettingsNullableUpdateEnvelopeInputObjectSchema } from './DeviceSettingsNullableUpdateEnvelopeInput.schema';
import { DeviceSettingsCreateInputObjectSchema as DeviceSettingsCreateInputObjectSchema } from './DeviceSettingsCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema as AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { DeviceUpdateManyWithoutUserNestedInputObjectSchema as DeviceUpdateManyWithoutUserNestedInputObjectSchema } from './DeviceUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema as SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { InviteUpdateManyWithoutInviterNestedInputObjectSchema as InviteUpdateManyWithoutInviterNestedInputObjectSchema } from './InviteUpdateManyWithoutInviterNestedInput.schema';
import { InviteUpdateOneWithoutUserNestedInputObjectSchema as InviteUpdateOneWithoutUserNestedInputObjectSchema } from './InviteUpdateOneWithoutUserNestedInput.schema';
import { OpportunityApplicationUpdateManyWithoutUserNestedInputObjectSchema as OpportunityApplicationUpdateManyWithoutUserNestedInputObjectSchema } from './OpportunityApplicationUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emailVerified: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => DeviceSettingsCreateInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  invites_sent: z.lazy(() => InviteUpdateManyWithoutInviterNestedInputObjectSchema).optional(),
  invite_used: z.lazy(() => InviteUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  opportunity_applications: z.lazy(() => OpportunityApplicationUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateInput>;
export const UserUpdateInputObjectZodSchema = makeSchema();
