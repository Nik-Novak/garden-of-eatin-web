import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorWhereInputObjectSchema as ContributorWhereInputObjectSchema } from './objects/ContributorWhereInput.schema';

export const ContributorDeleteManySchema: z.ZodType<Prisma.ContributorDeleteManyArgs> = z.object({ where: ContributorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContributorDeleteManyArgs>;

export const ContributorDeleteManyZodSchema = z.object({ where: ContributorWhereInputObjectSchema.optional() }).strict();