import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSelectObjectSchema as ResourceOccurrenceSelectObjectSchema } from './objects/ResourceOccurrenceSelect.schema';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './objects/ResourceOccurrenceInclude.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './objects/ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceCreateInputObjectSchema as ResourceOccurrenceCreateInputObjectSchema } from './objects/ResourceOccurrenceCreateInput.schema';
import { ResourceOccurrenceUncheckedCreateInputObjectSchema as ResourceOccurrenceUncheckedCreateInputObjectSchema } from './objects/ResourceOccurrenceUncheckedCreateInput.schema';
import { ResourceOccurrenceUpdateInputObjectSchema as ResourceOccurrenceUpdateInputObjectSchema } from './objects/ResourceOccurrenceUpdateInput.schema';
import { ResourceOccurrenceUncheckedUpdateInputObjectSchema as ResourceOccurrenceUncheckedUpdateInputObjectSchema } from './objects/ResourceOccurrenceUncheckedUpdateInput.schema';

export const ResourceOccurrenceUpsertOneSchema: z.ZodType<Prisma.ResourceOccurrenceUpsertArgs> = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), where: ResourceOccurrenceWhereUniqueInputObjectSchema, create: z.union([ ResourceOccurrenceCreateInputObjectSchema, ResourceOccurrenceUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceOccurrenceUpdateInputObjectSchema, ResourceOccurrenceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpsertArgs>;

export const ResourceOccurrenceUpsertOneZodSchema = z.object({ select: ResourceOccurrenceSelectObjectSchema.optional(), include: ResourceOccurrenceIncludeObjectSchema.optional(), where: ResourceOccurrenceWhereUniqueInputObjectSchema, create: z.union([ ResourceOccurrenceCreateInputObjectSchema, ResourceOccurrenceUncheckedCreateInputObjectSchema ]), update: z.union([ ResourceOccurrenceUpdateInputObjectSchema, ResourceOccurrenceUncheckedUpdateInputObjectSchema ]) }).strict();