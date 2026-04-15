import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './objects/ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchUpdateInputObjectSchema as ResourceOccurrenceSearchUpdateInputObjectSchema } from './objects/ResourceOccurrenceSearchUpdateInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateInputObjectSchema } from './objects/ResourceOccurrenceSearchUncheckedUpdateInput.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereUniqueInput.schema';

export const ResourceOccurrenceSearchUpdateOneSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateArgs> = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceSearchUpdateInputObjectSchema, ResourceOccurrenceSearchUncheckedUpdateInputObjectSchema]), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateArgs>;

export const ResourceOccurrenceSearchUpdateOneZodSchema = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceSearchUpdateInputObjectSchema, ResourceOccurrenceSearchUncheckedUpdateInputObjectSchema]), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict();