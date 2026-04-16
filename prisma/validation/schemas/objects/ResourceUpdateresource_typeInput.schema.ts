import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema'

const makeSchema = () => z.object({
  set: ResourceTypeSchema.array().optional(),
  push: z.union([ResourceTypeSchema, ResourceTypeSchema.array()]).optional()
}).strict();
export const ResourceUpdateresource_typeInputObjectSchema: z.ZodType<Prisma.ResourceUpdateresource_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateresource_typeInput>;
export const ResourceUpdateresource_typeInputObjectZodSchema = makeSchema();
