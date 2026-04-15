import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitUpdateManyMutationInputObjectSchema as ResourceSearchHitUpdateManyMutationInputObjectSchema } from './objects/ResourceSearchHitUpdateManyMutationInput.schema';
import { ResourceSearchHitWhereInputObjectSchema as ResourceSearchHitWhereInputObjectSchema } from './objects/ResourceSearchHitWhereInput.schema';

export const ResourceSearchHitUpdateManySchema: z.ZodType<Prisma.ResourceSearchHitUpdateManyArgs> = z.object({ data: ResourceSearchHitUpdateManyMutationInputObjectSchema, where: ResourceSearchHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateManyArgs>;

export const ResourceSearchHitUpdateManyZodSchema = z.object({ data: ResourceSearchHitUpdateManyMutationInputObjectSchema, where: ResourceSearchHitWhereInputObjectSchema.optional() }).strict();