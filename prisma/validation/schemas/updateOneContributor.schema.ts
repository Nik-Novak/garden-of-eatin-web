import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorUpdateInputObjectSchema as ContributorUpdateInputObjectSchema } from './objects/ContributorUpdateInput.schema';
import { ContributorUncheckedUpdateInputObjectSchema as ContributorUncheckedUpdateInputObjectSchema } from './objects/ContributorUncheckedUpdateInput.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';

export const ContributorUpdateOneSchema: z.ZodType<Prisma.ContributorUpdateArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  data: z.union([ContributorUpdateInputObjectSchema, ContributorUncheckedUpdateInputObjectSchema]), where: ContributorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContributorUpdateArgs>;

export const ContributorUpdateOneZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  data: z.union([ContributorUpdateInputObjectSchema, ContributorUncheckedUpdateInputObjectSchema]), where: ContributorWhereUniqueInputObjectSchema }).strict();