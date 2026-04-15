import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ResourceCreaterulesInputObjectSchema: z.ZodType<Prisma.ResourceCreaterulesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreaterulesInput>;
export const ResourceCreaterulesInputObjectZodSchema = makeSchema();
