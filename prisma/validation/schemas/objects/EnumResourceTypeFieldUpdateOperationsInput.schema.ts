import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema'

const makeSchema = () => z.object({
  set: ResourceTypeSchema.optional()
}).strict();
export const EnumResourceTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumResourceTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceTypeFieldUpdateOperationsInput>;
export const EnumResourceTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
