import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchListRelationFilterObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchListRelationFilter>;
export const ResourceOccurrenceSearchListRelationFilterObjectZodSchema = makeSchema();
