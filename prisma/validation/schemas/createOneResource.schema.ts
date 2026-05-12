import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSelectObjectSchema as ResourceSelectObjectSchema } from './objects/ResourceSelect.schema';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './objects/ResourceInclude.schema';
import { ResourceCreateInputObjectSchema as ResourceCreateInputObjectSchema } from './objects/ResourceCreateInput.schema';
import { ResourceUncheckedCreateInputObjectSchema as ResourceUncheckedCreateInputObjectSchema } from './objects/ResourceUncheckedCreateInput.schema';

export const ResourceCreateOneSchema: z.ZodType<Prisma.ResourceCreateArgs> = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), data: z.union([ResourceCreateInputObjectSchema, ResourceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResourceCreateArgs>;

export const ResourceCreateOneZodSchema = z.object({ select: ResourceSelectObjectSchema.optional(), include: ResourceIncludeObjectSchema.optional(), data: z.union([ResourceCreateInputObjectSchema, ResourceUncheckedCreateInputObjectSchema]) }).strict();