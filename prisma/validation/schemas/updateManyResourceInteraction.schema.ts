import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionUpdateManyMutationInputObjectSchema as ResourceInteractionUpdateManyMutationInputObjectSchema } from './objects/ResourceInteractionUpdateManyMutationInput.schema';
import { ResourceInteractionWhereInputObjectSchema as ResourceInteractionWhereInputObjectSchema } from './objects/ResourceInteractionWhereInput.schema';

export const ResourceInteractionUpdateManySchema: z.ZodType<Prisma.ResourceInteractionUpdateManyArgs> = z.object({ data: ResourceInteractionUpdateManyMutationInputObjectSchema, where: ResourceInteractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateManyArgs>;

export const ResourceInteractionUpdateManyZodSchema = z.object({ data: ResourceInteractionUpdateManyMutationInputObjectSchema, where: ResourceInteractionWhereInputObjectSchema.optional() }).strict();