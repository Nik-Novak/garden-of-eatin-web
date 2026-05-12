import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './objects/ResourceInclude.schema';
import { ResourceOrderByWithRelationInputObjectSchema as ResourceOrderByWithRelationInputObjectSchema } from './objects/ResourceOrderByWithRelationInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceScalarFieldEnumSchema } from './enums/ResourceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ResourceSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    schedule: z.boolean().optional(),
    timezone: z.boolean().optional(),
    resource_type: z.boolean().optional(),
    selection_type: z.boolean().optional(),
    packaging_type: z.boolean().optional(),
    loading_policy: z.boolean().optional(),
    vehicle_types: z.boolean().optional(),
    dietary_tags: z.boolean().optional(),
    categories: z.boolean().optional(),
    features: z.boolean().optional(),
    max_height_clearance_m: z.boolean().optional(),
    typical_volume_m3: z.boolean().optional(),
    typical_weight_kg: z.boolean().optional(),
    is_bulk: z.boolean().optional(),
    appointment_required: z.boolean().optional(),
    documentation_required: z.boolean().optional(),
    id_required: z.boolean().optional(),
    rules: z.boolean().optional(),
    resource_occurrences: z.boolean().optional(),
    resource_search_hits: z.boolean().optional(),
    resource_interactions: z.boolean().optional(),
    approved: z.boolean().optional(),
    rejection_reason: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    submitter_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceSelect>;

export const ResourceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    place: z.boolean().optional(),
    location: z.boolean().optional(),
    schedule: z.boolean().optional(),
    timezone: z.boolean().optional(),
    resource_type: z.boolean().optional(),
    selection_type: z.boolean().optional(),
    packaging_type: z.boolean().optional(),
    loading_policy: z.boolean().optional(),
    vehicle_types: z.boolean().optional(),
    dietary_tags: z.boolean().optional(),
    categories: z.boolean().optional(),
    features: z.boolean().optional(),
    max_height_clearance_m: z.boolean().optional(),
    typical_volume_m3: z.boolean().optional(),
    typical_weight_kg: z.boolean().optional(),
    is_bulk: z.boolean().optional(),
    appointment_required: z.boolean().optional(),
    documentation_required: z.boolean().optional(),
    id_required: z.boolean().optional(),
    rules: z.boolean().optional(),
    resource_occurrences: z.boolean().optional(),
    resource_search_hits: z.boolean().optional(),
    resource_interactions: z.boolean().optional(),
    approved: z.boolean().optional(),
    rejection_reason: z.boolean().optional(),
    submitter: z.boolean().optional(),
    submitter_id: z.boolean().optional(),
    submitter_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ResourceFindFirstOrThrowSchema: z.ZodType<Prisma.ResourceFindFirstOrThrowArgs> = z.object({ select: ResourceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOrderByWithRelationInputObjectSchema, ResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceWhereInputObjectSchema.optional(), cursor: ResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceScalarFieldEnumSchema, ResourceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceFindFirstOrThrowArgs>;

export const ResourceFindFirstOrThrowZodSchema = z.object({ select: ResourceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOrderByWithRelationInputObjectSchema, ResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceWhereInputObjectSchema.optional(), cursor: ResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceScalarFieldEnumSchema, ResourceScalarFieldEnumSchema.array()]).optional() }).strict();