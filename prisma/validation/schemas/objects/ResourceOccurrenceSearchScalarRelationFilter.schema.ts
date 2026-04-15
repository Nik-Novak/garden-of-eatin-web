import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchScalarRelationFilterObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchScalarRelationFilter>;
export const ResourceOccurrenceSearchScalarRelationFilterObjectZodSchema = makeSchema();
