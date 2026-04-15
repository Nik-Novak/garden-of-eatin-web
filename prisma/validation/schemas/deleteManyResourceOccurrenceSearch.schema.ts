import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './objects/ResourceOccurrenceSearchWhereInput.schema';

export const ResourceOccurrenceSearchDeleteManySchema: z.ZodType<Prisma.ResourceOccurrenceSearchDeleteManyArgs> = z.object({ where: ResourceOccurrenceSearchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchDeleteManyArgs>;

export const ResourceOccurrenceSearchDeleteManyZodSchema = z.object({ where: ResourceOccurrenceSearchWhereInputObjectSchema.optional() }).strict();