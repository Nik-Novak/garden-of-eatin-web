import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema as ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema } from './objects/ResourceOccurrenceSearchUpdateManyMutationInput.schema';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereInput.schema';

export const ResourceOccurrenceSearchUpdateManySchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateManyArgs> = z.object({ data: ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema, where: ResourceOccurrenceSearchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateManyArgs>;

export const ResourceOccurrenceSearchUpdateManyZodSchema = z.object({ data: ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema, where: ResourceOccurrenceSearchWhereInputObjectSchema.optional() }).strict();