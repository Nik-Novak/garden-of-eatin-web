import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanIncludeObjectSchema as QRScanIncludeObjectSchema } from './objects/QRScanInclude.schema';
import { QRScanOrderByWithRelationInputObjectSchema as QRScanOrderByWithRelationInputObjectSchema } from './objects/QRScanOrderByWithRelationInput.schema';
import { QRScanWhereInputObjectSchema as QRScanWhereInputObjectSchema } from './objects/QRScanWhereInput.schema';
import { QRScanWhereUniqueInputObjectSchema as QRScanWhereUniqueInputObjectSchema } from './objects/QRScanWhereUniqueInput.schema';
import { QRScanScalarFieldEnumSchema } from './enums/QRScanScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QRScanFindManySelectSchema: z.ZodType<Prisma.QRScanSelect> = z.object({
    id: z.boolean().optional(),
    qr_code: z.boolean().optional(),
    qr_code_id: z.boolean().optional(),
    qr_action: z.boolean().optional(),
    web_device: z.boolean().optional(),
    web_device_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QRScanSelect>;

export const QRScanFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    qr_code: z.boolean().optional(),
    qr_code_id: z.boolean().optional(),
    qr_action: z.boolean().optional(),
    web_device: z.boolean().optional(),
    web_device_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const QRScanFindManySchema: z.ZodType<Prisma.QRScanFindManyArgs> = z.object({ select: QRScanFindManySelectSchema.optional(), include: z.lazy(() => QRScanIncludeObjectSchema.optional()), orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QRScanScalarFieldEnumSchema, QRScanScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QRScanFindManyArgs>;

export const QRScanFindManyZodSchema = z.object({ select: QRScanFindManySelectSchema.optional(), include: z.lazy(() => QRScanIncludeObjectSchema.optional()), orderBy: z.union([QRScanOrderByWithRelationInputObjectSchema, QRScanOrderByWithRelationInputObjectSchema.array()]).optional(), where: QRScanWhereInputObjectSchema.optional(), cursor: QRScanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QRScanScalarFieldEnumSchema, QRScanScalarFieldEnumSchema.array()]).optional() }).strict();