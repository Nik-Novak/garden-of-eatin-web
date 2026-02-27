import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetTypeSchema } from '../enums/FacetType.schema'

const makeSchema = () => z.object({
  set: FacetTypeSchema.optional()
}).strict();
export const EnumFacetTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFacetTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumFacetTypeFieldUpdateOperationsInput>;
export const EnumFacetTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
