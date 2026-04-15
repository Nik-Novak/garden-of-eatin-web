import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ResourceInteractionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResourceInteractionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionWhereUniqueInput>;
export const ResourceInteractionWhereUniqueInputObjectZodSchema = makeSchema();
