import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema'

const makeSchema = () => z.object({
  set: ResourceSearchTypeSchema.optional()
}).strict();
export const EnumResourceSearchTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumResourceSearchTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceSearchTypeFieldUpdateOperationsInput>;
export const EnumResourceSearchTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
