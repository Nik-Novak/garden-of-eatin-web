import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { EnumInviteStatusFieldUpdateOperationsInputObjectSchema as EnumInviteStatusFieldUpdateOperationsInputObjectSchema } from './EnumInviteStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InviteStatusSchema, z.lazy(() => EnumInviteStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviter_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const InviteUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedUpdateWithoutUserInput>;
export const InviteUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
