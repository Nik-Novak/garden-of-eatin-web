import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const BugWhereUniqueInputObjectSchema: z.ZodType<Prisma.BugWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BugWhereUniqueInput>;
export const BugWhereUniqueInputObjectZodSchema = makeSchema();
