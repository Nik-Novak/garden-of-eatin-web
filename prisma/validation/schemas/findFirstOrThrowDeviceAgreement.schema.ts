import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './objects/DeviceAgreementInclude.schema';
import { DeviceAgreementOrderByWithRelationInputObjectSchema as DeviceAgreementOrderByWithRelationInputObjectSchema } from './objects/DeviceAgreementOrderByWithRelationInput.schema';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './objects/DeviceAgreementWhereInput.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './objects/DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementScalarFieldEnumSchema } from './enums/DeviceAgreementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DeviceAgreementFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DeviceAgreementSelect> = z.object({
    id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    agreement: z.boolean().optional(),
    agreement_id: z.boolean().optional(),
    opened: z.boolean().optional(),
    accepted: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementSelect>;

export const DeviceAgreementFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    device: z.boolean().optional(),
    device_id: z.boolean().optional(),
    agreement: z.boolean().optional(),
    agreement_id: z.boolean().optional(),
    opened: z.boolean().optional(),
    accepted: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const DeviceAgreementFindFirstOrThrowSchema: z.ZodType<Prisma.DeviceAgreementFindFirstOrThrowArgs> = z.object({ select: DeviceAgreementFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DeviceAgreementIncludeObjectSchema.optional()), orderBy: z.union([DeviceAgreementOrderByWithRelationInputObjectSchema, DeviceAgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceAgreementWhereInputObjectSchema.optional(), cursor: DeviceAgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeviceAgreementScalarFieldEnumSchema, DeviceAgreementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementFindFirstOrThrowArgs>;

export const DeviceAgreementFindFirstOrThrowZodSchema = z.object({ select: DeviceAgreementFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DeviceAgreementIncludeObjectSchema.optional()), orderBy: z.union([DeviceAgreementOrderByWithRelationInputObjectSchema, DeviceAgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceAgreementWhereInputObjectSchema.optional(), cursor: DeviceAgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeviceAgreementScalarFieldEnumSchema, DeviceAgreementScalarFieldEnumSchema.array()]).optional() }).strict();