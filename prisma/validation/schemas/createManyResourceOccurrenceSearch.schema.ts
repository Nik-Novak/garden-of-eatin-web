import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceSearchCreateManyInputObjectSchema as ResourceOccurrenceSearchCreateManyInputObjectSchema } from './objects/ResourceOccurrenceSearchCreateManyInput.schema';

export const ResourceOccurrenceSearchCreateManySchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyArgs> = z.object({ data: z.union([ ResourceOccurrenceSearchCreateManyInputObjectSchema, z.array(ResourceOccurrenceSearchCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyArgs>;

export const ResourceOccurrenceSearchCreateManyZodSchema = z.object({ data: z.union([ ResourceOccurrenceSearchCreateManyInputObjectSchema, z.array(ResourceOccurrenceSearchCreateManyInputObjectSchema) ]),  }).strict();