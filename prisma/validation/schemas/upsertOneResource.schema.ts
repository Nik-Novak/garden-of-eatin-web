import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSelectObjectSchema as ResourceSelectObjectSchema } from './objects/ResourceSelect.schema';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './objects/ResourceInclude.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';
import { ResourceCreateInputObjectSchema as ResourceCreateInputObjectSchema } from './objects/ResourceCreateInput.schema';
import { ResourceUncheckedCreateInputObjectSchema as ResourceUncheckedCreateInputObjectSchema } from './objects/ResourceUncheckedCreateInput.schema';
import { ResourceUpdateInputObjectSchema as ResourceUpdateInputObjectSchema } from './objects/ResourceUpdateInput.schema';
import { ResourceUncheckedUpdateInputObjectSchema as ResourceUncheckedUpdateInputObjectSchema } from './objects/ResourceUncheckedUpdateInput.schema';

export const ResourceUpsertOneSchema: z.ZodType<Prisma.ResourceUpsertArgs> = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), where: ResourceWhereUniqueInputObjectSchema, create: z.union([ ResourceCreateInputObjectSchema, ResourceUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceUpdateInputObjectSchema, ResourceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ResourceUpsertArgs>;

export const ResourceUpsertOneZodSchema = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), where: ResourceWhereUniqueInputObjectSchema, create: z.union([ ResourceCreateInputObjectSchema, ResourceUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceUpdateInputObjectSchema, ResourceUncheckedUpdateInputObjectSchema ]) }).strict();