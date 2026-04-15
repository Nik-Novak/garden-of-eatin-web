import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './objects/ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './objects/ResourceInteractionWhereUniqueInput.schema';

export const ResourceInteractionFindUniqueOrThrowSchema: z.ZodType<Prisma.ResourceInteractionFindUniqueOrThrowArgs> = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionFindUniqueOrThrowArgs>;

export const ResourceInteractionFindUniqueOrThrowZodSchema = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict();