import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereInputObjectSchema as ResourceInteractionWhereInputObjectSchema } from './ResourceInteractionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResourceInteractionWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResourceInteractionWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResourceInteractionWhereInputObjectSchema).optional()
}).strict();
export const ResourceInteractionListRelationFilterObjectSchema: z.ZodType<Prisma.ResourceInteractionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionListRelationFilter>;
export const ResourceInteractionListRelationFilterObjectZodSchema = makeSchema();
