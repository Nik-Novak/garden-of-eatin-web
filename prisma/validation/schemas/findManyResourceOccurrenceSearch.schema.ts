import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema as ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema } from './objects/ResourceOccurrenceSearchOrderByWithRelationInput.schema';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereInput.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchScalarFieldEnumSchema } from './enums/ResourceOccurrenceSearchScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceOccurrenceSearchFindManySelectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchSelect> = z.object({
    id: z.boolean().optional(),
    search_type: z.boolean().optional(),
    hits: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    radius_mi: z.boolean().optional(),
    user_location: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchSelect>;

export const ResourceOccurrenceSearchFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    search_type: z.boolean().optional(),
    hits: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    radius_mi: z.boolean().optional(),
    user_location: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ResourceOccurrenceSearchFindManySchema: z.ZodType<Prisma.ResourceOccurrenceSearchFindManyArgs> = z.object({ select: ResourceOccurrenceSearchFindManySelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceSearchIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema, ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceSearchWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceSearchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceSearchScalarFieldEnumSchema, ResourceOccurrenceSearchScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchFindManyArgs>;

export const ResourceOccurrenceSearchFindManyZodSchema = z.object({ select: ResourceOccurrenceSearchFindManySelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceSearchIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema, ResourceOccurrenceSearchOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceSearchWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceSearchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceSearchScalarFieldEnumSchema, ResourceOccurrenceSearchScalarFieldEnumSchema.array()]).optional() }).strict();