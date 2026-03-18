import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeOrderByWithRelationInputObjectSchema as NoticeOrderByWithRelationInputObjectSchema } from './objects/NoticeOrderByWithRelationInput.schema';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';
import { NoticeScalarFieldEnumSchema } from './enums/NoticeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoticeFindFirstSelectSchema: z.ZodType<Prisma.NoticeSelect> = z.object({
    id: z.boolean().optional(),
    level: z.boolean().optional(),
    content_md: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NoticeSelect>;

export const NoticeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    level: z.boolean().optional(),
    content_md: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const NoticeFindFirstSchema: z.ZodType<Prisma.NoticeFindFirstArgs> = z.object({ select: NoticeFindFirstSelectSchema.optional(),  orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NoticeScalarFieldEnumSchema, NoticeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NoticeFindFirstArgs>;

export const NoticeFindFirstZodSchema = z.object({ select: NoticeFindFirstSelectSchema.optional(),  orderBy: z.union([NoticeOrderByWithRelationInputObjectSchema, NoticeOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoticeWhereInputObjectSchema.optional(), cursor: NoticeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NoticeScalarFieldEnumSchema, NoticeScalarFieldEnumSchema.array()]).optional() }).strict();