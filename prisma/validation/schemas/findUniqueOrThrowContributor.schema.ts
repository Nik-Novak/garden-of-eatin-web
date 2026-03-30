import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';

export const ContributorFindUniqueOrThrowSchema: z.ZodType<Prisma.ContributorFindUniqueOrThrowArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContributorFindUniqueOrThrowArgs>;

export const ContributorFindUniqueOrThrowZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema }).strict();