import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema'

const nestedenuminteractiontypefilterSchema = z.object({
  equals: InteractionTypeSchema.optional(),
  in: InteractionTypeSchema.array().optional(),
  notIn: InteractionTypeSchema.array().optional(),
  not: z.union([InteractionTypeSchema, z.lazy(() => NestedEnumInteractionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumInteractionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumInteractionTypeFilter> = nestedenuminteractiontypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumInteractionTypeFilter>;
export const NestedEnumInteractionTypeFilterObjectZodSchema = nestedenuminteractiontypefilterSchema;
