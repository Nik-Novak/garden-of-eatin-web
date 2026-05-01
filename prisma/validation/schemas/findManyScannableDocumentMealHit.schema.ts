import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentMealHitIncludeObjectSchema as ScannableDocumentMealHitIncludeObjectSchema } from './objects/ScannableDocumentMealHitInclude.schema';
import { ScannableDocumentMealHitOrderByWithRelationInputObjectSchema as ScannableDocumentMealHitOrderByWithRelationInputObjectSchema } from './objects/ScannableDocumentMealHitOrderByWithRelationInput.schema';
import { ScannableDocumentMealHitWhereInputObjectSchema as ScannableDocumentMealHitWhereInputObjectSchema } from './objects/ScannableDocumentMealHitWhereInput.schema';
import { ScannableDocumentMealHitWhereUniqueInputObjectSchema as ScannableDocumentMealHitWhereUniqueInputObjectSchema } from './objects/ScannableDocumentMealHitWhereUniqueInput.schema';
import { ScannableDocumentMealHitScalarFieldEnumSchema } from './enums/ScannableDocumentMealHitScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScannableDocumentMealHitFindManySelectSchema: z.ZodType<Prisma.ScannableDocumentMealHitSelect> = z.object({
    id: z.boolean().optional(),
    scannable_document: z.boolean().optional(),
    scannable_document_id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitSelect>;

export const ScannableDocumentMealHitFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    scannable_document: z.boolean().optional(),
    scannable_document_id: z.boolean().optional(),
    meal: z.boolean().optional(),
    meal_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ScannableDocumentMealHitFindManySchema: z.ZodType<Prisma.ScannableDocumentMealHitFindManyArgs> = z.object({ select: ScannableDocumentMealHitFindManySelectSchema.optional(), include: z.lazy(() => ScannableDocumentMealHitIncludeObjectSchema.optional()), orderBy: z.union([ScannableDocumentMealHitOrderByWithRelationInputObjectSchema, ScannableDocumentMealHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScannableDocumentMealHitWhereInputObjectSchema.optional(), cursor: ScannableDocumentMealHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScannableDocumentMealHitScalarFieldEnumSchema, ScannableDocumentMealHitScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentMealHitFindManyArgs>;

export const ScannableDocumentMealHitFindManyZodSchema = z.object({ select: ScannableDocumentMealHitFindManySelectSchema.optional(), include: z.lazy(() => ScannableDocumentMealHitIncludeObjectSchema.optional()), orderBy: z.union([ScannableDocumentMealHitOrderByWithRelationInputObjectSchema, ScannableDocumentMealHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScannableDocumentMealHitWhereInputObjectSchema.optional(), cursor: ScannableDocumentMealHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScannableDocumentMealHitScalarFieldEnumSchema, ScannableDocumentMealHitScalarFieldEnumSchema.array()]).optional() }).strict();