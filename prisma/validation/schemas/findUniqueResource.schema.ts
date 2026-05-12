import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSelectObjectSchema as ResourceSelectObjectSchema } from './objects/ResourceSelect.schema';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './objects/ResourceInclude.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './objects/ResourceWhereUniqueInput.schema';

export const ResourceFindUniqueSchema: z.ZodType<Prisma.ResourceFindUniqueArgs> = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), where: ResourceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceFindUniqueArgs>;

export const ResourceFindUniqueZodSchema = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), where: ResourceWhereUniqueInputObjectSchema }).strict();