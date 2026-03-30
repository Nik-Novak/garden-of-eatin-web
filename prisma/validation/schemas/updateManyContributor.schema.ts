import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorUpdateManyMutationInputObjectSchema as ContributorUpdateManyMutationInputObjectSchema } from './objects/ContributorUpdateManyMutationInput.schema';
import { ContributorWhereInputObjectSchema as ContributorWhereInputObjectSchema } from './objects/ContributorWhereInput.schema';

export const ContributorUpdateManySchema: z.ZodType<Prisma.ContributorUpdateManyArgs> = z.object({ data: ContributorUpdateManyMutationInputObjectSchema, where: ContributorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContributorUpdateManyArgs>;

export const ContributorUpdateManyZodSchema = z.object({ data: ContributorUpdateManyMutationInputObjectSchema, where: ContributorWhereInputObjectSchema.optional() }).strict();