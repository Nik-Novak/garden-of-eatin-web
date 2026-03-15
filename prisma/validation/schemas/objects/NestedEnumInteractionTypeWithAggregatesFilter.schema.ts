import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumInteractionTypeFilterObjectSchema as NestedEnumInteractionTypeFilterObjectSchema } from './NestedEnumInteractionTypeFilter.schema'

const nestedenuminteractiontypewithaggregatesfilterSchema = z.object({
  equals: InteractionTypeSchema.optional(),
  in: InteractionTypeSchema.array().optional(),
  notIn: InteractionTypeSchema.array().optional(),
  not: z.union([InteractionTypeSchema, z.lazy(() => NestedEnumInteractionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumInteractionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumInteractionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumInteractionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumInteractionTypeWithAggregatesFilter> = nestedenuminteractiontypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumInteractionTypeWithAggregatesFilter>;
export const NestedEnumInteractionTypeWithAggregatesFilterObjectZodSchema = nestedenuminteractiontypewithaggregatesfilterSchema;
