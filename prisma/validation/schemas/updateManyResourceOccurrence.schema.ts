import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceUpdateManyMutationInputObjectSchema as ResourceOccurrenceUpdateManyMutationInputObjectSchema } from './objects/ResourceOccurrenceUpdateManyMutationInput.schema';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './objects/ResourceOccurrenceWhereInput.schema';

export const ResourceOccurrenceUpdateManySchema: z.ZodType<Prisma.ResourceOccurrenceUpdateManyArgs> = z.object({ data: ResourceOccurrenceUpdateManyMutationInputObjectSchema, where: ResourceOccurrenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpdateManyArgs>;

export const ResourceOccurrenceUpdateManyZodSchema = z.object({ data: ResourceOccurrenceUpdateManyMutationInputObjectSchema, where: ResourceOccurrenceWhereInputObjectSchema.optional() }).strict();