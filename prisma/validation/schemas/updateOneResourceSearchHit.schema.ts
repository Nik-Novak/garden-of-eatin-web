import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './objects/ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitUpdateInputObjectSchema as ResourceSearchHitUpdateInputObjectSchema } from './objects/ResourceSearchHitUpdateInput.schema';
import { ResourceSearchHitUncheckedUpdateInputObjectSchema as ResourceSearchHitUncheckedUpdateInputObjectSchema } from './objects/ResourceSearchHitUncheckedUpdateInput.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './objects/ResourceSearchHitWhereUniqueInput.schema';

export const ResourceSearchHitUpdateOneSchema: z.ZodType<Prisma.ResourceSearchHitUpdateArgs> = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), data: z.union([ResourceSearchHitUpdateInputObjectSchema, ResourceSearchHitUncheckedUpdateInputObjectSchema]), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateArgs>;

export const ResourceSearchHitUpdateOneZodSchema = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), data: z.union([ResourceSearchHitUpdateInputObjectSchema, ResourceSearchHitUncheckedUpdateInputObjectSchema]), where: ResourceSearchHitWhereUniqueInputObjectSchema }).strict();