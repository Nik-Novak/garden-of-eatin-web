import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { EnumInviteStatusFieldUpdateOperationsInputObjectSchema as EnumInviteStatusFieldUpdateOperationsInputObjectSchema } from './EnumInviteStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutInvites_sentNestedInputObjectSchema as UserUpdateOneRequiredWithoutInvites_sentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvites_sentNestedInput.schema';
import { UserUpdateOneWithoutInvite_usedNestedInputObjectSchema as UserUpdateOneWithoutInvite_usedNestedInputObjectSchema } from './UserUpdateOneWithoutInvite_usedNestedInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InviteStatusSchema, z.lazy(() => EnumInviteStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviter: z.lazy(() => UserUpdateOneRequiredWithoutInvites_sentNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutInvite_usedNestedInputObjectSchema).optional()
}).strict();
export const InviteUpdateInputObjectSchema: z.ZodType<Prisma.InviteUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateInput>;
export const InviteUpdateInputObjectZodSchema = makeSchema();
