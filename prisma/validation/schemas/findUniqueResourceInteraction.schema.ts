import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './objects/ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './objects/ResourceInteractionWhereUniqueInput.schema';

export const ResourceInteractionFindUniqueSchema: z.ZodType<Prisma.ResourceInteractionFindUniqueArgs> = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionFindUniqueArgs>;

export const ResourceInteractionFindUniqueZodSchema = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema }).strict();