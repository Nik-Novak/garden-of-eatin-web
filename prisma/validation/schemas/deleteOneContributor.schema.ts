import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';

export const ContributorDeleteOneSchema: z.ZodType<Prisma.ContributorDeleteArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContributorDeleteArgs>;

export const ContributorDeleteOneZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict();