import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';

export const BugDeleteManySchema: z.ZodType<Prisma.BugDeleteManyArgs> = z.object({ where: BugWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BugDeleteManyArgs>;

export const BugDeleteManyZodSchema = z.object({ where: BugWhereInputObjectSchema.optional() }).strict();