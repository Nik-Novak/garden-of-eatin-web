import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceOrderByWithRelationInputObjectSchema as ResourceOccurrenceOrderByWithRelationInputObjectSchema } from './objects/ResourceOccurrenceOrderByWithRelationInput.schema';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './objects/ResourceOccurrenceWhereInput.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceScalarFieldEnumSchema } from './enums/ResourceOccurrenceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceOccurrenceFindFirstSelectSchema: z.ZodType<Prisma.ResourceOccurrenceSelect> = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSelect>;

export const ResourceOccurrenceFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ResourceOccurrenceFindFirstSchema: z.ZodType<Prisma.ResourceOccurrenceFindFirstArgs> = z.object({ select: ResourceOccurrenceFindFirstSelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceOrderByWithRelationInputObjectSchema, ResourceOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceScalarFieldEnumSchema, ResourceOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceFindFirstArgs>;

export const ResourceOccurrenceFindFirstZodSchema = z.object({ select: ResourceOccurrenceFindFirstSelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceOrderByWithRelationInputObjectSchema, ResourceOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceScalarFieldEnumSchema, ResourceOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict();