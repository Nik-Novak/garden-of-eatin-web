import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './objects/ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './objects/ResourceSearchHitInclude.schema';
import { ResourceSearchHitCreateInputObjectSchema as ResourceSearchHitCreateInputObjectSchema } from './objects/ResourceSearchHitCreateInput.schema';
import { ResourceSearchHitUncheckedCreateInputObjectSchema as ResourceSearchHitUncheckedCreateInputObjectSchema } from './objects/ResourceSearchHitUncheckedCreateInput.schema';

export const ResourceSearchHitCreateOneSchema: z.ZodType<Prisma.ResourceSearchHitCreateArgs> = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), data: z.union([ResourceSearchHitCreateInputObjectSchema, ResourceSearchHitUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateArgs>;

export const ResourceSearchHitCreateOneZodSchema = z.object({ select: ResourceSearchHitSelectObjectSchema.optional(), include: ResourceSearchHitIncludeObjectSchema.optional(), data: z.union([ResourceSearchHitCreateInputObjectSchema, ResourceSearchHitUncheckedCreateInputObjectSchema]) }).strict();