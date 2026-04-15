import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './ResourceOccurrenceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceListRelationFilterObjectSchema: z.ZodType<Prisma.ResourceOccurrenceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceListRelationFilter>;
export const ResourceOccurrenceListRelationFilterObjectZodSchema = makeSchema();
