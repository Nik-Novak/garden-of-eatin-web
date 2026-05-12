import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './objects/ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionUpdateInputObjectSchema as ResourceInteractionUpdateInputObjectSchema } from './objects/ResourceInteractionUpdateInput.schema';
import { ResourceInteractionUncheckedUpdateInputObjectSchema as ResourceInteractionUncheckedUpdateInputObjectSchema } from './objects/ResourceInteractionUncheckedUpdateInput.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './objects/ResourceInteractionWhereUniqueInput.schema';

export const ResourceInteractionUpdateOneSchema: z.ZodType<Prisma.ResourceInteractionUpdateArgs> = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), data: z.union([ResourceInteractionUpdateInputObjectSchema, ResourceInteractionUncheckedUpdateInputObjectSchema]), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateArgs>;

export const ResourceInteractionUpdateOneZodSchema = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), data: z.union([ResourceInteractionUpdateInputObjectSchema, ResourceInteractionUncheckedUpdateInputObjectSchema]), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict();