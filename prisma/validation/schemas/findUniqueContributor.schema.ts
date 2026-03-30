import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';

export const ContributorFindUniqueSchema: z.ZodType<Prisma.ContributorFindUniqueArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContributorFindUniqueArgs>;

export const ContributorFindUniqueZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict();