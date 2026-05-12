import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourcePackagingTypeSchema } from '../enums/ResourcePackagingType.schema'

const makeSchema = () => z.object({
  set: ResourcePackagingTypeSchema.array()
}).strict();
export const ResourceCreatepackaging_typeInputObjectSchema: z.ZodType<Prisma.ResourceCreatepackaging_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatepackaging_typeInput>;
export const ResourceCreatepackaging_typeInputObjectZodSchema = makeSchema();
