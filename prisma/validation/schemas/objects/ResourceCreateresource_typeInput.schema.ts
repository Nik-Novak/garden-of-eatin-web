import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema'

const makeSchema = () => z.object({
  set: ResourceTypeSchema.array()
}).strict();
export const ResourceCreateresource_typeInputObjectSchema: z.ZodType<Prisma.ResourceCreateresource_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateresource_typeInput>;
export const ResourceCreateresource_typeInputObjectZodSchema = makeSchema();
