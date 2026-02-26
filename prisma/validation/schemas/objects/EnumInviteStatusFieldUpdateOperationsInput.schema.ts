import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema'

const makeSchema = () => z.object({
  set: InviteStatusSchema.optional()
}).strict();
export const EnumInviteStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumInviteStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumInviteStatusFieldUpdateOperationsInput>;
export const EnumInviteStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
