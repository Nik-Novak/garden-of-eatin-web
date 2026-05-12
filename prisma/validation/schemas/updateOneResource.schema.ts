import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSelectObjectSchema as ResourceSelectObjectSchema } from './objects/ResourceSelect.schema';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './objects/ResourceInclude.schema';
import { ResourceUpdateInputObjectSchema as ResourceUpdateInputObjectSchema } from './objects/ResourceUpdateInput.schema';
import { ResourceUncheckedUpdateInputObjectSchema as ResourceUncheckedUpdateInputObjectSchema } from './objects/ResourceUncheckedUpdateInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';

export const ResourceUpdateOneSchema: z.ZodType<Prisma.ResourceUpdateArgs> = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), data: z.union([ResourceUpdateInputObjectSchema, ResourceUncheckedUpdateInputObjectSchema]), where: ResourceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceUpdateArgs>;

export const ResourceUpdateOneZodSchema = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), data: z.union([ResourceUpdateInputObjectSchema, ResourceUncheckedUpdateInputObjectSchema]), where: ResourceWhereUniqueInputObjectSchema }).strict();