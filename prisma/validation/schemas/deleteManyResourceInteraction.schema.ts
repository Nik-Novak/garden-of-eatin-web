import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionWhereInputObjectSchema as ResourceInteractionWhereInputObjectSchema } from './objects/ResourceInteractionWhereInput.schema';

export const ResourceInteractionDeleteManySchema: z.ZodType<Prisma.ResourceInteractionDeleteManyArgs> = z.object({ where: ResourceInteractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionDeleteManyArgs>;

export const ResourceInteractionDeleteManyZodSchema = z.object({ where: ResourceInteractionWhereInputObjectSchema.optional() }).strict();