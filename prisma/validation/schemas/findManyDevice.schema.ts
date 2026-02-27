import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceOrderByWithRelationInputObjectSchema as DeviceOrderByWithRelationInputObjectSchema } from './objects/DeviceOrderByWithRelationInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';
import { DeviceScalarFieldEnumSchema } from './enums/DeviceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DeviceFindManySelectSchema: z.ZodType<Prisma.DeviceSelect> = z.object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    settings: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    bugs: z.boolean().optional(),
    contact_requests: z.boolean().optional(),
    reviews: z.boolean().optional(),
    submitted_meals: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DeviceSelect>;

export const DeviceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    settings: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    bugs: z.boolean().optional(),
    contact_requests: z.boolean().optional(),
    reviews: z.boolean().optional(),
    submitted_meals: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DeviceFindManySchema: z.ZodType<Prisma.DeviceFindManyArgs> = z.object({ select: DeviceFindManySelectSchema.optional(), include: z.lazy(() => DeviceIncludeObjectSchema.optional()), orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeviceScalarFieldEnumSchema, DeviceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DeviceFindManyArgs>;

export const DeviceFindManyZodSchema = z.object({ select: DeviceFindManySelectSchema.optional(), include: z.lazy(() => DeviceIncludeObjectSchema.optional()), orderBy: z.union([DeviceOrderByWithRelationInputObjectSchema, DeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceWhereInputObjectSchema.optional(), cursor: DeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeviceScalarFieldEnumSchema, DeviceScalarFieldEnumSchema.array()]).optional() }).strict();