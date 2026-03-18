import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema'

const makeSchema = () => z.object({
  set: NoticeLevelSchema.optional()
}).strict();
export const EnumNoticeLevelFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumNoticeLevelFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumNoticeLevelFieldUpdateOperationsInput>;
export const EnumNoticeLevelFieldUpdateOperationsInputObjectZodSchema = makeSchema();
