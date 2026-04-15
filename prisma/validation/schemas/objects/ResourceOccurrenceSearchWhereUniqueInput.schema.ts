import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ResourceOccurrenceSearchWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchWhereUniqueInput>;
export const ResourceOccurrenceSearchWhereUniqueInputObjectZodSchema = makeSchema();
