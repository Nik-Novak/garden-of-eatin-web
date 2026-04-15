import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './objects/ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './objects/ResourceSearchHitWhereUniqueInput.schema';

export const ResourceSearchHitFindUniqueOrThrowSchema: z.ZodType<Prisma.ResourceSearchHitFindUniqueOrThrowArgs> = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitFindUniqueOrThrowArgs>;

export const ResourceSearchHitFindUniqueOrThrowZodSchema = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict();