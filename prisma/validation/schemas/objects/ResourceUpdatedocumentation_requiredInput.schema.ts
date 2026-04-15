import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ResourceUpdatedocumentation_requiredInputObjectSchema: z.ZodType<Prisma.ResourceUpdatedocumentation_requiredInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatedocumentation_requiredInput>;
export const ResourceUpdatedocumentation_requiredInputObjectZodSchema = makeSchema();
