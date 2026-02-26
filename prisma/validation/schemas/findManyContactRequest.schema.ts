import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestOrderByWithRelationInputObjectSchema as ContactRequestOrderByWithRelationInputObjectSchema } from './objects/ContactRequestOrderByWithRelationInput.schema';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './objects/ContactRequestWhereInput.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';
import { ContactRequestScalarFieldEnumSchema } from './enums/ContactRequestScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContactRequestFindManySelectSchema: z.ZodType<Prisma.ContactRequestSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    email: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactRequestSelect>;

export const ContactRequestFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    email: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const ContactRequestFindManySchema: z.ZodType<Prisma.ContactRequestFindManyArgs> = z.object({ select: ContactRequestFindManySelectSchema.optional(), include: z.lazy(() => ContactRequestIncludeObjectSchema.optional()), orderBy: z.union([ContactRequestOrderByWithRelationInputObjectSchema, ContactRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactRequestWhereInputObjectSchema.optional(), cursor: ContactRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactRequestScalarFieldEnumSchema, ContactRequestScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactRequestFindManyArgs>;

export const ContactRequestFindManyZodSchema = z.object({ select: ContactRequestFindManySelectSchema.optional(), include: z.lazy(() => ContactRequestIncludeObjectSchema.optional()), orderBy: z.union([ContactRequestOrderByWithRelationInputObjectSchema, ContactRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactRequestWhereInputObjectSchema.optional(), cursor: ContactRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactRequestScalarFieldEnumSchema, ContactRequestScalarFieldEnumSchema.array()]).optional() }).strict();