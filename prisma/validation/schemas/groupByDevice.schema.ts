import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';
import { DeviceOrderByWithAggregationInputObjectSchema as DeviceOrderByWithAggregationInputObjectSchema } from './objects/DeviceOrderByWithAggregationInput.schema';
import { DeviceScalarWhereWithAggregatesInputObjectSchema as DeviceScalarWhereWithAggregatesInputObjectSchema } from './objects/DeviceScalarWhereWithAggregatesInput.schema';
import { DeviceScalarFieldEnumSchema } from './enums/DeviceScalarFieldEnum.schema';
import { DeviceCountAggregateInputObjectSchema as DeviceCountAggregateInputObjectSchema } from './objects/DeviceCountAggregateInput.schema';
import { DeviceMinAggregateInputObjectSchema as DeviceMinAggregateInputObjectSchema } from './objects/DeviceMinAggregateInput.schema';
import { DeviceMaxAggregateInputObjectSchema as DeviceMaxAggregateInputObjectSchema } from './objects/DeviceMaxAggregateInput.schema';

export const DeviceGroupBySchema: z.ZodType<Prisma.DeviceGroupByArgs> = z.object({ where: DeviceWhereInputObjectSchema.optional(), orderBy: z.union([DeviceOrderByWithAggregationInputObjectSchema, DeviceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DeviceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DeviceScalarFieldEnumSchema), _count: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional(), _min: DeviceMinAggregateInputObjectSchema.optional(), _max: DeviceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceGroupByArgs>;

export const DeviceGroupByZodSchema = z.object({ where: DeviceWhereInputObjectSchema.optional(), orderBy: z.union([DeviceOrderByWithAggregationInputObjectSchema, DeviceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DeviceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DeviceScalarFieldEnumSchema), _count: z.union([ z.literal(true), DeviceCountAggregateInputObjectSchema ]).optional(), _min: DeviceMinAggregateInputObjectSchema.optional(), _max: DeviceMaxAggregateInputObjectSchema.optional() }).strict();