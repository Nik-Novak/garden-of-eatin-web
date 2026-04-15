import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitOrderByWithRelationInputObjectSchema as ResourceSearchHitOrderByWithRelationInputObjectSchema } from './objects/ResourceSearchHitOrderByWithRelationInput.schema';
import { ResourceSearchHitWhereInputObjectSchema as ResourceSearchHitWhereInputObjectSchema } from './objects/ResourceSearchHitWhereInput.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './objects/ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitScalarFieldEnumSchema } from './enums/ResourceSearchHitScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceSearchHitFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ResourceSearchHitSelect> = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    search: z.boolean().optional(),
    search_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitSelect>;

export const ResourceSearchHitFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    search: z.boolean().optional(),
    search_id: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ResourceSearchHitFindFirstOrThrowSchema: z.ZodType<Prisma.ResourceSearchHitFindFirstOrThrowArgs> = z.object({ select: ResourceSearchHitFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceSearchHitIncludeObjectSchema.optional()), orderBy: z.union([ResourceSearchHitOrderByWithRelationInputObjectSchema, ResourceSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceSearchHitWhereInputObjectSchema.optional(), cursor: ResourceSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceSearchHitScalarFieldEnumSchema, ResourceSearchHitScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitFindFirstOrThrowArgs>;

export const ResourceSearchHitFindFirstOrThrowZodSchema = z.object({ select: ResourceSearchHitFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceSearchHitIncludeObjectSchema.optional()), orderBy: z.union([ResourceSearchHitOrderByWithRelationInputObjectSchema, ResourceSearchHitOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceSearchHitWhereInputObjectSchema.optional(), cursor: ResourceSearchHitWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceSearchHitScalarFieldEnumSchema, ResourceSearchHitScalarFieldEnumSchema.array()]).optional() }).strict();