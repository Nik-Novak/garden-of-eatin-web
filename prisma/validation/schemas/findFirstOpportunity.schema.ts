import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './objects/OpportunityInclude.schema';
import { OpportunityOrderByWithRelationInputObjectSchema as OpportunityOrderByWithRelationInputObjectSchema } from './objects/OpportunityOrderByWithRelationInput.schema';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './objects/OpportunityWhereInput.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './objects/OpportunityWhereUniqueInput.schema';
import { OpportunityScalarFieldEnumSchema } from './enums/OpportunityScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OpportunityFindFirstSelectSchema: z.ZodType<Prisma.OpportunitySelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    abstract: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    applications: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OpportunitySelect>;

export const OpportunityFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    abstract: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    applications: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OpportunityFindFirstSchema: z.ZodType<Prisma.OpportunityFindFirstArgs> = z.object({ select: OpportunityFindFirstSelectSchema.optional(), include: z.lazy(() => OpportunityIncludeObjectSchema.optional()), orderBy: z.union([OpportunityOrderByWithRelationInputObjectSchema, OpportunityOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityWhereInputObjectSchema.optional(), cursor: OpportunityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OpportunityScalarFieldEnumSchema, OpportunityScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityFindFirstArgs>;

export const OpportunityFindFirstZodSchema = z.object({ select: OpportunityFindFirstSelectSchema.optional(), include: z.lazy(() => OpportunityIncludeObjectSchema.optional()), orderBy: z.union([OpportunityOrderByWithRelationInputObjectSchema, OpportunityOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityWhereInputObjectSchema.optional(), cursor: OpportunityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OpportunityScalarFieldEnumSchema, OpportunityScalarFieldEnumSchema.array()]).optional() }).strict();