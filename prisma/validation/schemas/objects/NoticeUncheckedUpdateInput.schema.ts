import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { EnumNoticeLevelFieldUpdateOperationsInputObjectSchema as EnumNoticeLevelFieldUpdateOperationsInputObjectSchema } from './EnumNoticeLevelFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  level: z.union([NoticeLevelSchema, z.lazy(() => EnumNoticeLevelFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_md: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const NoticeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.NoticeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeUncheckedUpdateInput>;
export const NoticeUncheckedUpdateInputObjectZodSchema = makeSchema();
