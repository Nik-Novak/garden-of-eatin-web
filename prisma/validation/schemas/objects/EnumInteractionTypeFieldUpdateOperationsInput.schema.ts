import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema'

const makeSchema = () => z.object({
  set: InteractionTypeSchema.optional()
}).strict();
export const EnumInteractionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumInteractionTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumInteractionTypeFieldUpdateOperationsInput>;
export const EnumInteractionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
