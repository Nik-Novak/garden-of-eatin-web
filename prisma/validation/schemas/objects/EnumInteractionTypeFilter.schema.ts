import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { NestedEnumInteractionTypeFilterObjectSchema as NestedEnumInteractionTypeFilterObjectSchema } from './NestedEnumInteractionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: InteractionTypeSchema.optional(),
  in: InteractionTypeSchema.array().optional(),
  notIn: InteractionTypeSchema.array().optional(),
  not: z.union([InteractionTypeSchema, z.lazy(() => NestedEnumInteractionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumInteractionTypeFilterObjectSchema: z.ZodType<Prisma.EnumInteractionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumInteractionTypeFilter>;
export const EnumInteractionTypeFilterObjectZodSchema = makeSchema();
