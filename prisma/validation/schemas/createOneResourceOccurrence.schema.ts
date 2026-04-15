import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSelectObjectSchema as ResourceOccurrenceSelectObjectSchema } from './objects/ResourceOccurrenceSelect.schema';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceCreateInputObjectSchema as ResourceOccurrenceCreateInputObjectSchema } from './objects/ResourceOccurrenceCreateInput.schema';
import { ResourceOccurrenceUncheckedCreateInputObjectSchema as ResourceOccurrenceUncheckedCreateInputObjectSchema } from './objects/ResourceOccurrenceUncheckedCreateInput.schema';

export const ResourceOccurrenceCreateOneSchema: z.ZodType<Prisma.ResourceOccurrenceCreateArgs> = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceCreateInputObjectSchema, ResourceOccurrenceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateArgs>;

export const ResourceOccurrenceCreateOneZodSchema = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), data: z.union([ResourceOccurrenceCreateInputObjectSchema, ResourceOccurrenceUncheckedCreateInputObjectSchema]) }).strict();