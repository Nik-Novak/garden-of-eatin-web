import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSelectObjectSchema as ResourceOccurrenceSelectObjectSchema } from './objects/ResourceOccurrenceSelect.schema';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceWhereUniqueInput.schema';

export const ResourceOccurrenceFindUniqueOrThrowSchema: z.ZodType<Prisma.ResourceOccurrenceFindUniqueOrThrowArgs> = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), where: ResourceOccurrenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceFindUniqueOrThrowArgs>;

export const ResourceOccurrenceFindUniqueOrThrowZodSchema = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), where: ResourceOccurrenceWhereUniqueInputObjectSchema }).strict();