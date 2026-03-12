import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementOrderByWithRelationInputObjectSchema as DeviceAgreementOrderByWithRelationInputObjectSchema } from './objects/DeviceAgreementOrderByWithRelationInput.schema';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './objects/DeviceAgreementWhereInput.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './objects/DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementCountAggregateInputObjectSchema as DeviceAgreementCountAggregateInputObjectSchema } from './objects/DeviceAgreementCountAggregateInput.schema';

export const DeviceAgreementCountSchema: z.ZodType<Prisma.DeviceAgreementCountArgs> = z.object({ orderBy: z.union([DeviceAgreementOrderByWithRelationInputObjectSchema, DeviceAgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceAgreementWhereInputObjectSchema.optional(), cursor: DeviceAgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DeviceAgreementCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementCountArgs>;

export const DeviceAgreementCountZodSchema = z.object({ orderBy: z.union([DeviceAgreementOrderByWithRelationInputObjectSchema, DeviceAgreementOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeviceAgreementWhereInputObjectSchema.optional(), cursor: DeviceAgreementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DeviceAgreementCountAggregateInputObjectSchema ]).optional() }).strict();