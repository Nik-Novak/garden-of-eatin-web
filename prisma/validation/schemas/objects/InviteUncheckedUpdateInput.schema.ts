import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { EnumInviteStatusFieldUpdateOperationsInputObjectSchema as EnumInviteStatusFieldUpdateOperationsInputObjectSchema } from './EnumInviteStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InviteStatusSchema, z.lazy(() => EnumInviteStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviter_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string().max(24), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const InviteUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.InviteUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedUpdateInput>;
export const InviteUncheckedUpdateInputObjectZodSchema = makeSchema();
