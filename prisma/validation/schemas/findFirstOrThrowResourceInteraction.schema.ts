import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionOrderByWithRelationInputObjectSchema as ResourceInteractionOrderByWithRelationInputObjectSchema } from './objects/ResourceInteractionOrderByWithRelationInput.schema';
import { ResourceInteractionWhereInputObjectSchema as ResourceInteractionWhereInputObjectSchema } from './objects/ResourceInteractionWhereInput.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './objects/ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionScalarFieldEnumSchema } from './enums/ResourceInteractionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceInteractionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ResourceInteractionSelect> = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionSelect>;

export const ResourceInteractionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    interaction_type: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ResourceInteractionFindFirstOrThrowSchema: z.ZodType<Prisma.ResourceInteractionFindFirstOrThrowArgs> = z.object({ select: ResourceInteractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceInteractionIncludeObjectSchema.optional()), orderBy: z.union([ResourceInteractionOrderByWithRelationInputObjectSchema, ResourceInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceInteractionWhereInputObjectSchema.optional(), cursor: ResourceInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceInteractionScalarFieldEnumSchema, ResourceInteractionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionFindFirstOrThrowArgs>;

export const ResourceInteractionFindFirstOrThrowZodSchema = z.object({ select: ResourceInteractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ResourceInteractionIncludeObjectSchema.optional()), orderBy: z.union([ResourceInteractionOrderByWithRelationInputObjectSchema, ResourceInteractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceInteractionWhereInputObjectSchema.optional(), cursor: ResourceInteractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceInteractionScalarFieldEnumSchema, ResourceInteractionScalarFieldEnumSchema.array()]).optional() }).strict();