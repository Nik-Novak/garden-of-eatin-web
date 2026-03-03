import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema';
import { NestedEnumTimeAnchorFilterObjectSchema as NestedEnumTimeAnchorFilterObjectSchema } from './NestedEnumTimeAnchorFilter.schema'

const makeSchema = () => z.object({
  equals: TimeAnchorSchema.optional(),
  in: TimeAnchorSchema.array().optional(),
  notIn: TimeAnchorSchema.array().optional(),
  not: z.union([TimeAnchorSchema, z.lazy(() => NestedEnumTimeAnchorFilterObjectSchema)]).optional()
}).strict();
export const EnumTimeAnchorFilterObjectSchema: z.ZodType<Prisma.EnumTimeAnchorFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTimeAnchorFilter>;
export const EnumTimeAnchorFilterObjectZodSchema = makeSchema();
