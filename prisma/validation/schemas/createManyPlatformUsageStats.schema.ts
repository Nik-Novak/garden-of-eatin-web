import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PlatformUsageStatsCreateManyInputObjectSchema as PlatformUsageStatsCreateManyInputObjectSchema } from './objects/PlatformUsageStatsCreateManyInput.schema';

export const PlatformUsageStatsCreateManySchema: z.ZodType<Prisma.PlatformUsageStatsCreateManyArgs> = z.object({ data: z.union([ PlatformUsageStatsCreateManyInputObjectSchema, z.array(PlatformUsageStatsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.PlatformUsageStatsCreateManyArgs>;

export const PlatformUsageStatsCreateManyZodSchema = z.object({ data: z.union([ PlatformUsageStatsCreateManyInputObjectSchema, z.array(PlatformUsageStatsCreateManyInputObjectSchema) ]),  }).strict();