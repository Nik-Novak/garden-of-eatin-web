import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourcePackagingTypeSchema } from '../enums/ResourcePackagingType.schema'

const makeSchema = () => z.object({
  set: ResourcePackagingTypeSchema.array().optional(),
  push: z.union([ResourcePackagingTypeSchema, ResourcePackagingTypeSchema.array()]).optional()
}).strict();
export const ResourceUpdatepackaging_typeInputObjectSchema: z.ZodType<Prisma.ResourceUpdatepackaging_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatepackaging_typeInput>;
export const ResourceUpdatepackaging_typeInputObjectZodSchema = makeSchema();
