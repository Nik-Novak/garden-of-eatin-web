import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ResourceCreatedocumentation_requiredInputObjectSchema: z.ZodType<Prisma.ResourceCreatedocumentation_requiredInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatedocumentation_requiredInput>;
export const ResourceCreatedocumentation_requiredInputObjectZodSchema = makeSchema();
