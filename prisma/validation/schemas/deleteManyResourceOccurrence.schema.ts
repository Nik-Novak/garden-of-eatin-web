import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './objects/ResourceOccurrenceWhereInput.schema';

export const ResourceOccurrenceDeleteManySchema: z.ZodType<Prisma.ResourceOccurrenceDeleteManyArgs> = z.object({ where: ResourceOccurrenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceDeleteManyArgs>;

export const ResourceOccurrenceDeleteManyZodSchema = z.object({ where: ResourceOccurrenceWhereInputObjectSchema.optional() }).strict();