import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesOrderByWithRelationInputObjectSchema as DummyGenTypesOrderByWithRelationInputObjectSchema } from './objects/DummyGenTypesOrderByWithRelationInput.schema';
import { DummyGenTypesWhereInputObjectSchema as DummyGenTypesWhereInputObjectSchema } from './objects/DummyGenTypesWhereInput.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';
import { DummyGenTypesScalarFieldEnumSchema } from './enums/DummyGenTypesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DummyGenTypesFindFirstSelectSchema: z.ZodType<Prisma.DummyGenTypesSelect> = z.object({
    id: z.boolean().optional(),
    qrarp: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesSelect>;

export const DummyGenTypesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    qrarp: z.boolean().optional()
  }).strict();

export const DummyGenTypesFindFirstSchema: z.ZodType<Prisma.DummyGenTypesFindFirstArgs> = z.object({ select: DummyGenTypesFindFirstSelectSchema.optional(),  orderBy: z.union([DummyGenTypesOrderByWithRelationInputObjectSchema, DummyGenTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: DummyGenTypesWhereInputObjectSchema.optional(), cursor: DummyGenTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DummyGenTypesScalarFieldEnumSchema, DummyGenTypesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesFindFirstArgs>;

export const DummyGenTypesFindFirstZodSchema = z.object({ select: DummyGenTypesFindFirstSelectSchema.optional(),  orderBy: z.union([DummyGenTypesOrderByWithRelationInputObjectSchema, DummyGenTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: DummyGenTypesWhereInputObjectSchema.optional(), cursor: DummyGenTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DummyGenTypesScalarFieldEnumSchema, DummyGenTypesScalarFieldEnumSchema.array()]).optional() }).strict();