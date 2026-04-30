import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScannableDocumentIncludeObjectSchema as ScannableDocumentIncludeObjectSchema } from './objects/ScannableDocumentInclude.schema';
import { ScannableDocumentOrderByWithRelationInputObjectSchema as ScannableDocumentOrderByWithRelationInputObjectSchema } from './objects/ScannableDocumentOrderByWithRelationInput.schema';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './objects/ScannableDocumentWhereInput.schema';
import { ScannableDocumentWhereUniqueInputObjectSchema as ScannableDocumentWhereUniqueInputObjectSchema } from './objects/ScannableDocumentWhereUniqueInput.schema';
import { ScannableDocumentScalarFieldEnumSchema } from './enums/ScannableDocumentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScannableDocumentFindFirstSelectSchema: z.ZodType<Prisma.ScannableDocumentSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    timezone: z.boolean().optional(),
    print_settings: z.boolean().optional(),
    qr_codes: z.boolean().optional(),
    file_url: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentSelect>;

export const ScannableDocumentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    timezone: z.boolean().optional(),
    print_settings: z.boolean().optional(),
    qr_codes: z.boolean().optional(),
    file_url: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ScannableDocumentFindFirstSchema: z.ZodType<Prisma.ScannableDocumentFindFirstArgs> = z.object({ select: ScannableDocumentFindFirstSelectSchema.optional(), include: z.lazy(() => ScannableDocumentIncludeObjectSchema.optional()), orderBy: z.union([ScannableDocumentOrderByWithRelationInputObjectSchema, ScannableDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScannableDocumentWhereInputObjectSchema.optional(), cursor: ScannableDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScannableDocumentScalarFieldEnumSchema, ScannableDocumentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ScannableDocumentFindFirstArgs>;

export const ScannableDocumentFindFirstZodSchema = z.object({ select: ScannableDocumentFindFirstSelectSchema.optional(), include: z.lazy(() => ScannableDocumentIncludeObjectSchema.optional()), orderBy: z.union([ScannableDocumentOrderByWithRelationInputObjectSchema, ScannableDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScannableDocumentWhereInputObjectSchema.optional(), cursor: ScannableDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScannableDocumentScalarFieldEnumSchema, ScannableDocumentScalarFieldEnumSchema.array()]).optional() }).strict();