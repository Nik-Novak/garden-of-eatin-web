import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitWhereInputObjectSchema as ResourceSearchHitWhereInputObjectSchema } from './objects/ResourceSearchHitWhereInput.schema';

export const ResourceSearchHitDeleteManySchema: z.ZodType<Prisma.ResourceSearchHitDeleteManyArgs> = z.object({ where: ResourceSearchHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitDeleteManyArgs>;

export const ResourceSearchHitDeleteManyZodSchema = z.object({ where: ResourceSearchHitWhereInputObjectSchema.optional() }).strict();