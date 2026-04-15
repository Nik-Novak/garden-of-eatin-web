import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './objects/ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionCreateInputObjectSchema as ResourceInteractionCreateInputObjectSchema } from './objects/ResourceInteractionCreateInput.schema';
import { ResourceInteractionUncheckedCreateInputObjectSchema as ResourceInteractionUncheckedCreateInputObjectSchema } from './objects/ResourceInteractionUncheckedCreateInput.schema';

export const ResourceInteractionCreateOneSchema: z.ZodType<Prisma.ResourceInteractionCreateArgs> = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), data: z.union([ResourceInteractionCreateInputObjectSchema, ResourceInteractionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionCreateArgs>;

export const ResourceInteractionCreateOneZodSchema = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), data: z.union([ResourceInteractionCreateInputObjectSchema, ResourceInteractionUncheckedCreateInputObjectSchema]) }).strict();