import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ResourceWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResourceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceWhereUniqueInput>;
export const ResourceWhereUniqueInputObjectZodSchema = makeSchema();
