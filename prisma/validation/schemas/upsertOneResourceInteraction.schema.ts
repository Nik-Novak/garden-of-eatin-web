import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './objects/ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './objects/ResourceInteractionInclude.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './objects/ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionCreateInputObjectSchema as ResourceInteractionCreateInputObjectSchema } from './objects/ResourceInteractionCreateInput.schema';
import { ResourceInteractionUncheckedCreateInputObjectSchema as ResourceInteractionUncheckedCreateInputObjectSchema } from './objects/ResourceInteractionUncheckedCreateInput.schema';
import { ResourceInteractionUpdateInputObjectSchema as ResourceInteractionUpdateInputObjectSchema } from './objects/ResourceInteractionUpdateInput.schema';
import { ResourceInteractionUncheckedUpdateInputObjectSchema as ResourceInteractionUncheckedUpdateInputObjectSchema } from './objects/ResourceInteractionUncheckedUpdateInput.schema';

export const ResourceInteractionUpsertOneSchema: z.ZodType<Prisma.ResourceInteractionUpsertArgs> = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema, create: z.union([ ResourceInteractionCreateInputObjectSchema, ResourceInteractionUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceInteractionUpdateInputObjectSchema, ResourceInteractionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionUpsertArgs>;

export const ResourceInteractionUpsertOneZodSchema = z.object({ select: ResourceInteractionSelectObjectSchema.optional(), include: ResourceInteractionIncludeObjectSchema.optional(), where: ResourceInteractionWhereUniqueInputObjectSchema, create: z.union([ ResourceInteractionCreateInputObjectSchema, ResourceInteractionUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceInteractionUpdateInputObjectSchema, ResourceInteractionUncheckedUpdateInputObjectSchema ]) }).strict();