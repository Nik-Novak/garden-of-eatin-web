import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceOrderByWithRelationInputObjectSchema as ResourceOccurrenceOrderByWithRelationInputObjectSchema } from './objects/ResourceOccurrenceOrderByWithRelationInput.schema';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './objects/ResourceOccurrenceWhereInput.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceScalarFieldEnumSchema } from './enums/ResourceOccurrenceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceOccurrenceFindManySelectSchema: z.ZodType<Prisma.ResourceOccurrenceSelect> = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSelect>;

export const ResourceOccurrenceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    resource: z.boolean().optional(),
    resource_id: z.boolean().optional(),
    start: z.boolean().optional(),
    end: z.boolean().optional(),
    timezone: z.boolean().optional(),
    location: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ResourceOccurrenceFindManySchema: z.ZodType<Prisma.ResourceOccurrenceFindManyArgs> = z.object({ select: ResourceOccurrenceFindManySelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceOrderByWithRelationInputObjectSchema, ResourceOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceScalarFieldEnumSchema, ResourceOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceFindManyArgs>;

export const ResourceOccurrenceFindManyZodSchema = z.object({ select: ResourceOccurrenceFindManySelectSchema.optional(), include: z.lazy(() => ResourceOccurrenceIncludeObjectSchema.optional()), orderBy: z.union([ResourceOccurrenceOrderByWithRelationInputObjectSchema, ResourceOccurrenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResourceOccurrenceWhereInputObjectSchema.optional(), cursor: ResourceOccurrenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ResourceOccurrenceScalarFieldEnumSchema, ResourceOccurrenceScalarFieldEnumSchema.array()]).optional() }).strict();