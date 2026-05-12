import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './objects/ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereUniqueInput.schema';

export const ResourceOccurrenceSearchDeleteOneSchema: z.ZodType<Prisma.ResourceOccurrenceSearchDeleteArgs> = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchDeleteArgs>;

export const ResourceOccurrenceSearchDeleteOneZodSchema = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), where: ResourceOccurrenceSearchWhereUniqueInputObjectSchema }).strict();