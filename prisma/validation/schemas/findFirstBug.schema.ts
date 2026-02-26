import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugOrderByWithRelationInputObjectSchema as BugOrderByWithRelationInputObjectSchema } from './objects/BugOrderByWithRelationInput.schema';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';
import { BugScalarFieldEnumSchema } from './enums/BugScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BugFindFirstSelectSchema: z.ZodType<Prisma.BugSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    client_log: z.boolean().optional(),
    server_log: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BugSelect>;

export const BugFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    client_log: z.boolean().optional(),
    server_log: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const BugFindFirstSchema: z.ZodType<Prisma.BugFindFirstArgs> = z.object({ select: BugFindFirstSelectSchema.optional(), include: z.lazy(() => BugIncludeObjectSchema.optional()), orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BugScalarFieldEnumSchema, BugScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BugFindFirstArgs>;

export const BugFindFirstZodSchema = z.object({ select: BugFindFirstSelectSchema.optional(), include: z.lazy(() => BugIncludeObjectSchema.optional()), orderBy: z.union([BugOrderByWithRelationInputObjectSchema, BugOrderByWithRelationInputObjectSchema.array()]).optional(), where: BugWhereInputObjectSchema.optional(), cursor: BugWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BugScalarFieldEnumSchema, BugScalarFieldEnumSchema.array()]).optional() }).strict();