import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './objects/ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitWhereUniqueInputObjectSchema as ResourceSearchHitWhereUniqueInputObjectSchema } from './objects/ResourceSearchHitWhereUniqueInput.schema';
import { ResourceSearchHitCreateInputObjectSchema as ResourceSearchHitCreateInputObjectSchema } from './objects/ResourceSearchHitCreateInput.schema';
import { ResourceSearchHitUncheckedCreateInputObjectSchema as ResourceSearchHitUncheckedCreateInputObjectSchema } from './objects/ResourceSearchHitUncheckedCreateInput.schema';
import { ResourceSearchHitUpdateInputObjectSchema as ResourceSearchHitUpdateInputObjectSchema } from './objects/ResourceSearchHitUpdateInput.schema';
import { ResourceSearchHitUncheckedUpdateInputObjectSchema as ResourceSearchHitUncheckedUpdateInputObjectSchema } from './objects/ResourceSearchHitUncheckedUpdateInput.schema';

export const ResourceSearchHitUpsertOneSchema: z.ZodType<Prisma.ResourceSearchHitUpsertArgs> = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema, create: z.union([ ResourceSearchHitCreateInputObjectSchema, ResourceSearchHitUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceSearchHitUpdateInputObjectSchema, ResourceSearchHitUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitUpsertArgs>;

export const ResourceSearchHitUpsertOneZodSchema = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), where: ResourceSearchHitWhereUniqueInputObjectSchema, create: z.union([ ResourceSearchHitCreateInputObjectSchema, ResourceSearchHitUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceSearchHitUpdateInputObjectSchema, ResourceSearchHitUncheckedUpdateInputObjectSchema ]) }).strict();