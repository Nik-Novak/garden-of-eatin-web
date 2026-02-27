import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { EnumInviteStatusFieldUpdateOperationsInputObjectSchema as EnumInviteStatusFieldUpdateOperationsInputObjectSchema } from './EnumInviteStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutInvite_usedNestedInputObjectSchema as UserUpdateOneWithoutInvite_usedNestedInputObjectSchema } from './UserUpdateOneWithoutInvite_usedNestedInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InviteStatusSchema, z.lazy(() => EnumInviteStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutInvite_usedNestedInputObjectSchema).optional()
}).strict();
export const InviteUpdateWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUpdateWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateWithoutInviterInput>;
export const InviteUpdateWithoutInviterInputObjectZodSchema = makeSchema();
