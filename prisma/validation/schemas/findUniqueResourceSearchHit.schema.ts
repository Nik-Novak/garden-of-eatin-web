import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './objects/ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './objects/ResourceSearchHitWhereUniqueInput.schema';

export const ResourceSearchHitFindUniqueSchema: z.ZodType<Prisma.ResourceSearchHitFindUniqueArgs> = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitFindUniqueArgs>;

export const ResourceSearchHitFindUniqueZodSchema = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict();