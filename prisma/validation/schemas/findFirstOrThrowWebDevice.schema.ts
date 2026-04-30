import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceOrderByWithRelationInputObjectSchema as WebDeviceOrderByWithRelationInputObjectSchema } from './objects/WebDeviceOrderByWithRelationInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './objects/WebDeviceWhereInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';
import { WebDeviceScalarFieldEnumSchema } from './enums/WebDeviceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebDeviceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WebDeviceSelect> = z.object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    metadata: z.boolean().optional(),
    settings: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    contact_requests: z.boolean().optional(),
    qr_scans: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WebDeviceSelect>;

export const WebDeviceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    metadata: z.boolean().optional(),
    settings: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    contact_requests: z.boolean().optional(),
    qr_scans: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WebDeviceFindFirstOrThrowSchema: z.ZodType<Prisma.WebDeviceFindFirstOrThrowArgs> = z.object({ select: WebDeviceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WebDeviceIncludeObjectSchema.optional()), orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WebDeviceScalarFieldEnumSchema, WebDeviceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WebDeviceFindFirstOrThrowArgs>;

export const WebDeviceFindFirstOrThrowZodSchema = z.object({ select: WebDeviceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WebDeviceIncludeObjectSchema.optional()), orderBy: z.union([WebDeviceOrderByWithRelationInputObjectSchema, WebDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WebDeviceWhereInputObjectSchema.optional(), cursor: WebDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WebDeviceScalarFieldEnumSchema, WebDeviceScalarFieldEnumSchema.array()]).optional() }).strict();