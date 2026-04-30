import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeIncludeObjectSchema as QRCodeIncludeObjectSchema } from './objects/QRCodeInclude.schema';
import { QRCodeOrderByWithRelationInputObjectSchema as QRCodeOrderByWithRelationInputObjectSchema } from './objects/QRCodeOrderByWithRelationInput.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';
import { QRCodeWhereUniqueInputObjectSchema as QRCodeWhereUniqueInputObjectSchema } from './objects/QRCodeWhereUniqueInput.schema';
import { QRCodeScalarFieldEnumSchema } from './enums/QRCodeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QRCodeFindFirstSelectSchema: z.ZodType<Prisma.QRCodeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    action: z.boolean().optional(),
    scannable_document: z.boolean().optional(),
    scannable_document_id: z.boolean().optional(),
    qr_scans: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QRCodeSelect>;

export const QRCodeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    action: z.boolean().optional(),
    scannable_document: z.boolean().optional(),
    scannable_document_id: z.boolean().optional(),
    qr_scans: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const QRCodeFindFirstSchema: z.ZodType<Prisma.QRCodeFindFirstArgs> = z.object({ select: QRCodeFindFirstSelectSchema.optional(), include: z.lazy(() => QRCodeIncludeObjectSchema.optional()), orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QRCodeScalarFieldEnumSchema, QRCodeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeFindFirstArgs>;

export const QRCodeFindFirstZodSchema = z.object({ select: QRCodeFindFirstSelectSchema.optional(), include: z.lazy(() => QRCodeIncludeObjectSchema.optional()), orderBy: z.union([QRCodeOrderByWithRelationInputObjectSchema, QRCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRCodeWhereInputObjectSchema.optional(), cursor: QRCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QRCodeScalarFieldEnumSchema, QRCodeScalarFieldEnumSchema.array()]).optional() }).strict();