import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './objects/ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './objects/ResourceOccurrenceSearchInclude.schema';
import { ResourceOccurrenceSearchCreateInputObjectSchema as ResourceOccurrenceSearchCreateInputObjectSchema } from './objects/ResourceOccurrenceSearchCreateInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateInputObjectSchema } from './objects/ResourceOccurrenceSearchUncheckedCreateInput.schema';

export const ResourceOccurrenceSearchCreateOneSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateArgs> = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceSearchCreateInputObjectSchema, ResourceOccurrenceSearchUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateArgs>;

export const ResourceOccurrenceSearchCreateOneZodSchema = z.object({ select: ResourceOccurrenceSearchSelectObjectSchema.optional(), include: ResourceOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceSearchCreateInputObjectSchema, ResourceOccurrenceSearchUncheckedCreateInputObjectSchema]) }).strict();