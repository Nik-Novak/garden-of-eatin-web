import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './objects/ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereUniqueInput.schema';

export const ResourceOccurrenceSearchFindUniqueSchema: z.ZodType<Prisma.ResourceOccurrenceSearchFindUniqueArgs> = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchFindUniqueArgs>;

export const ResourceOccurrenceSearchFindUniqueZodSchema = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict();