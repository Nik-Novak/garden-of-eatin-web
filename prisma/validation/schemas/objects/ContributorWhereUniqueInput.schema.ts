import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const ContributorWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContributorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorWhereUniqueInput>;
export const ContributorWhereUniqueInputObjectZodSchema = makeSchema();
