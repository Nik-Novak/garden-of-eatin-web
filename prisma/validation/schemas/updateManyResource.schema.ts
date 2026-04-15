import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceUpdateManyMutationInputObjectSchema as ResourceUpdateManyMutationInputObjectSchema } from './objects/ResourceUpdateManyMutationInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';

export const ResourceUpdateManySchema: z.ZodType<Prisma.ResourceUpdateManyArgs> = z.object({ data: ResourceUpdateManyMutationInputObjectSchema, where: ResourceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceUpdateManyArgs>;

export const ResourceUpdateManyZodSchema = z.object({ data: ResourceUpdateManyMutationInputObjectSchema, where: ResourceWhereInputObjectSchema.optional() }).strict();