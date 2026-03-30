import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './objects/ContributorSelect.schema';
import { ContributorCreateInputObjectSchema as ContributorCreateInputObjectSchema } from './objects/ContributorCreateInput.schema';
import { ContributorUncheckedCreateInputObjectSchema as ContributorUncheckedCreateInputObjectSchema } from './objects/ContributorUncheckedCreateInput.schema';

export const ContributorCreateOneSchema: z.ZodType<Prisma.ContributorCreateArgs> = z.object({ select: ContributorSelectObjectSchema.optional(),  data: z.union([ContributorCreateInputObjectSchema, ContributorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ContributorCreateArgs>;

export const ContributorCreateOneZodSchema = z.object({ select: ContributorSelectObjectSchema.optional(),  data: z.union([ContributorCreateInputObjectSchema, ContributorUncheckedCreateInputObjectSchema]) }).strict();