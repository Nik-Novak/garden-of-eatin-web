import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './objects/ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereUniqueInput.schema';

export const ResourceOccurrenceSearchFindUniqueOrThrowSchema: z.ZodType<Prisma.ResourceOccurrenceSearchFindUniqueOrThrowArgs> = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchFindUniqueOrThrowArgs>;

export const ResourceOccurrenceSearchFindUniqueOrThrowZodSchema = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict();