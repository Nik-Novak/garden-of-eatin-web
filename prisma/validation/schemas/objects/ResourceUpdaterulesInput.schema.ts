import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ResourceUpdaterulesInputObjectSchema: z.ZodType<Prisma.ResourceUpdaterulesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdaterulesInput>;
export const ResourceUpdaterulesInputObjectZodSchema = makeSchema();
