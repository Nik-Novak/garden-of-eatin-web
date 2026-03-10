import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementOrderByWithRelationInputObjectSchema as AgreementOrderByWithRelationInputObjectSchema } from './objects/AgreementOrderByWithRelationInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';
import { AgreementScalarFieldEnumSchema } from './enums/AgreementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgreementFindManySelectSchema: z.ZodType<Prisma.AgreementSelect> = z.object({
    id: z.boolean().optional(),
    agreement_type: z.boolean().optional(),
    effective_date: z.boolean().optional(),
    content_md: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgreementSelect>;

export const AgreementFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    agreement_type: z.boolean().optional(),
    effective_date: z.boolean().optional(),
    content_md: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const AgreementFindManySchema: z.ZodType<Prisma.AgreementFindManyArgs> = z.object({ select: AgreementFindManySelectSchema.optional(),  orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementScalarFieldEnumSchema, AgreementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgreementFindManyArgs>;

export const AgreementFindManyZodSchema = z.object({ select: AgreementFindManySelectSchema.optional(),  orderBy: z.union([AgreementOrderByWithRelationInputObjectSchema, AgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgreementWhereInputObjectSchema.optional(), cursor: AgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgreementScalarFieldEnumSchema, AgreementScalarFieldEnumSchema.array()]).optional() }).strict();