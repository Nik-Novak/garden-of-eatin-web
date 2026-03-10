import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema'

const makeSchema = () => z.object({
  set: SearchTypeSchema.optional()
}).strict();
export const EnumSearchTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSearchTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSearchTypeFieldUpdateOperationsInput>;
export const EnumSearchTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
