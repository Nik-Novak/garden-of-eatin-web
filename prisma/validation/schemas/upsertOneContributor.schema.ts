import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';
import { ContributorCreateInputObjectSchema as ContributorCreateInputObjectSchema } from './objects/ContributorCreateInput.schema';
import { ContributorUncheckedCreateInputObjectSchema as ContributorUncheckedCreateInputObjectSchema } from './objects/ContributorUncheckedCreateInput.schema';
import { ContributorUpdateInputObjectSchema as ContributorUpdateInputObjectSchema } from './objects/ContributorUpdateInput.schema';
import { ContributorUncheckedUpdateInputObjectSchema as ContributorUncheckedUpdateInputObjectSchema } from './objects/ContributorUncheckedUpdateInput.schema';

export const ContributorUpsertOneSchema: z.ZodType<Prisma.ContributorUpsertArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema, create: z.union([ ContributorCreateInputObjectSchema, ContributorUncheckedCreateInputObjectSchema ]), update: z.union([ ContributorUpdateInputObjectSchema, ContributorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ContributorUpsertArgs>;

export const ContributorUpsertOneZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  where: ContributorWhereUniqueInputObjectSchema, create: z.union([ ContributorCreateInputObjectSchema, ContributorUncheckedCreateInputObjectSchema ]), update: z.union([ ContributorUpdateInputObjectSchema, ContributorUncheckedUpdateInputObjectSchema ]) }).strict();