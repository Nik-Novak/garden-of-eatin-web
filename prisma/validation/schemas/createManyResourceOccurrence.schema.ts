import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceOccurrenceCreateManyInputObjectSchema as ResourceOccurrenceCreateManyInputObjectSchema } from './objects/ResourceOccurrenceCreateManyInput.schema';

export const ResourceOccurrenceCreateManySchema: z.ZodType<Prisma.ResourceOccurrenceCreateManyArgs> = z.object({ data: z.union([ ResourceOccurrenceCreateManyInputObjectSchema, z.array(ResourceOccurrenceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateManyArgs>;

export const ResourceOccurrenceCreateManyZodSchema = z.object({ data: z.union([ ResourceOccurrenceCreateManyInputObjectSchema, z.array(ResourceOccurrenceCreateManyInputObjectSchema) ]),  }).strict();