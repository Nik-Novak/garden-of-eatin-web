import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSelectObjectSchema as ResourceOccurrenceSelectObjectSchema } from './objects/ResourceOccurrenceSelect.schema';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceUpdateInputObjectSchema as ResourceOccurrenceUpdateInputObjectSchema } from './objects/ResourceOccurrenceUpdateInput.schema';
import { ResourceOccurrenceUncheckedUpdateInputObjectSchema as ResourceOccurrenceUncheckedUpdateInputObjectSchema } from './objects/ResourceOccurrenceUncheckedUpdateInput.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceWhereUniqueInput.schema';

export const ResourceOccurrenceUpdateOneSchema: z.ZodType<Prisma.ResourceOccurrenceUpdateArgs> = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceUpdateInputObjectSchema, ResourceOccurrenceUncheckedUpdateInputObjectSchema]), where: ResourceOccurrenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpdateArgs>;

export const ResourceOccurrenceUpdateOneZodSchema = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceUpdateInputObjectSchema, ResourceOccurrenceUncheckedUpdateInputObjectSchema]), where: ResourceOccurrenceWhereUniqueInputObjectSchema }).strict();