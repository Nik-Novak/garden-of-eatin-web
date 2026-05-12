import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './objects/ResourceWhereInput.schema';

export const ResourceDeleteManySchema: z.ZodType<Prisma.ResourceDeleteManyArgs> = z.object({ where: ResourceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceDeleteManyArgs>;

export const ResourceDeleteManyZodSchema = z.object({ where: ResourceWhereInputObjectSchema.optional() }).strict();