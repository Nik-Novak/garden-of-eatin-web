import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SelectionTypeSchema } from '../enums/SelectionType.schema'

const makeSchema = () => z.object({
  set: SelectionTypeSchema.optional()
}).strict();
export const EnumSelectionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSelectionTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSelectionTypeFieldUpdateOperationsInput>;
export const EnumSelectionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
