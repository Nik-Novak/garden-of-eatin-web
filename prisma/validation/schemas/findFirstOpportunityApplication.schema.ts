import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './objects/OpportunityApplicationInclude.schema';
import { OpportunityApplicationOrderByWithRelationInputObjectSchema as OpportunityApplicationOrderByWithRelationInputObjectSchema } from './objects/OpportunityApplicationOrderByWithRelationInput.schema';
import { OpportunityApplicationWhereInputObjectSchema as OpportunityApplicationWhereInputObjectSchema } from './objects/OpportunityApplicationWhereInput.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './objects/OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationScalarFieldEnumSchema } from './enums/OpportunityApplicationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OpportunityApplicationFindFirstSelectSchema: z.ZodType<Prisma.OpportunityApplicationSelect> = z.object({
    id: z.boolean().optional(),
    opportunity: z.boolean().optional(),
    opportunity_id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    status: z.boolean().optional(),
    applicant_first_name: z.boolean().optional(),
    applicant_last_name: z.boolean().optional(),
    applicant_email: z.boolean().optional(),
    applicant_phone: z.boolean().optional(),
    applicant_availability: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationSelect>;

export const OpportunityApplicationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    opportunity: z.boolean().optional(),
    opportunity_id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    status: z.boolean().optional(),
    applicant_first_name: z.boolean().optional(),
    applicant_last_name: z.boolean().optional(),
    applicant_email: z.boolean().optional(),
    applicant_phone: z.boolean().optional(),
    applicant_availability: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const OpportunityApplicationFindFirstSchema: z.ZodType<Prisma.OpportunityApplicationFindFirstArgs> = z.object({ select: OpportunityApplicationFindFirstSelectSchema.optional(), include: z.lazy(() => OpportunityApplicationIncludeObjectSchema.optional()), orderBy: z.union([OpportunityApplicationOrderByWithRelationInputObjectSchema, OpportunityApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityApplicationWhereInputObjectSchema.optional(), cursor: OpportunityApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OpportunityApplicationScalarFieldEnumSchema, OpportunityApplicationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationFindFirstArgs>;

export const OpportunityApplicationFindFirstZodSchema = z.object({ select: OpportunityApplicationFindFirstSelectSchema.optional(), include: z.lazy(() => OpportunityApplicationIncludeObjectSchema.optional()), orderBy: z.union([OpportunityApplicationOrderByWithRelationInputObjectSchema, OpportunityApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OpportunityApplicationWhereInputObjectSchema.optional(), cursor: OpportunityApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OpportunityApplicationScalarFieldEnumSchema, OpportunityApplicationScalarFieldEnumSchema.array()]).optional() }).strict();