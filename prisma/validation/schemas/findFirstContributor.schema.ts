import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorOrderByWithRelationInputObjectSchema as ContributorOrderByWithRelationInputObjectSchema } from './objects/ContributorOrderByWithRelationInput.schema';
import { ContributorWhereInputObjectSchema as ContributorWhereInputObjectSchema } from './objects/ContributorWhereInput.schema';
import { ContributorWhereUniqueInputObjectSchema as ContributorWhereUniqueInputObjectSchema } from './objects/ContributorWhereUniqueInput.schema';
import { ContributorScalarFieldEnumSchema } from './enums/ContributorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContributorFindFirstSelectSchema: z.ZodType<Prisma.ContributorSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    defaultImage: z.boolean().optional(),
    hoverImage: z.boolean().optional(),
    order: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContributorSelect>;

export const ContributorFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    defaultImage: z.boolean().optional(),
    hoverImage: z.boolean().optional(),
    order: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const ContributorFindFirstSchema: z.ZodType<Prisma.ContributorFindFirstArgs> = z.object({ select: ContributorFindFirstSelectSchema.optional(),  orderBy: z.union([ContributorOrderByWithRelationInputObjectSchema, ContributorOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContributorWhereInputObjectSchema.optional(), cursor: ContributorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContributorScalarFieldEnumSchema, ContributorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContributorFindFirstArgs>;

export const ContributorFindFirstZodSchema = z.object({ select: ContributorFindFirstSelectSchema.optional(),  orderBy: z.union([ContributorOrderByWithRelationInputObjectSchema, ContributorOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContributorWhereInputObjectSchema.optional(), cursor: ContributorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContributorScalarFieldEnumSchema, ContributorScalarFieldEnumSchema.array()]).optional() }).strict();